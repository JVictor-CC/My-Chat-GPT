import { openai } from "../services/api.js"
import UserModel from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

export const loginUser = async (req, res) => {
    const data = req.body
    try {
        const user = await UserModel.findOne({email: data.email})
        if(!user) {
            return res.status(200).json({
                success: false,
                message: 'Invalid email or password!'
            })
        }
        const matchPassword = await bcrypt.compare(data.password, user.password)
        if(!matchPassword) {
            return res.status(200).json({
                success: false,
                message: 'Invalid email or password!'
            })
        }

        // * Autenticate User JWT
        const token = jwt.sign({
            userId: user._id,
            username: user.username,
            email: user.email
        }, process.env.JWT_SECRET, {expiresIn: '24h'})

        return res.status(200).json({
            success: true,
            message: 'Successfully signed in!',
            token: {
                email: user.email,
                token
            }
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }   
}

export const registerUser = async (req, res) => {
    const data = req.body
    try {
        const emailExists = await UserModel.findOne({email: data.email})
        if(emailExists) {
            return res.status(200).json({
                success: false,
                message: 'Email already exists!'
            })
        }

        data.password = await bcrypt.hash(data.password, 10)
        const user = new UserModel({
            username: data.username,
            email: data.email,
            password: data.password
        })
        await user.save()

        return res.status(200).json(
            {
                success: true,
                message: 'User successfully registered!'
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }  
}

export const sendMessage = async (req, res) => {
    try {

        const userEmail = req.user.email
        const prompt = req.body.message
        const chatIndex = req.body.chatIndex
        const chatName = req.body.chatName
        const user = await UserModel.findOne({email: userEmail})
        
        if(chatIndex === null) {
            user.chats.push({
                title: `${chatName}`,
                messages: []
            })
            user.save()
        }

        user.chats[chatIndex].messages.push({
            text: `${prompt}`,
            sender: 'user'
        })
        
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })

        user.chats[chatIndex].messages.push({
            text: `${response.data.choices[0].text}`,
            sender: 'fake-gpt'
        })
        
        user.save()

        return res.status(200).json(
            {
                success: true,
                data: `${response.data.choices[0].text}`
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: error.response ? error.response.data : 'Ocorreu um erro no servidor'
            }
        )
    }
}



export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken
        next()

    } catch (error) {
        res.status(401).json({ error: 'Authentication failed!' })
    }
}

export const createChat = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const chatName = req.body.chatName

        const user = await UserModel.findOne({email: userEmail})

        user.chats.push({
            title: `${chatName}`,
            messages: []
        })
        user.save()
        return res.status(200).json(
            {
                sucess: true,
                data: "Chat successfully created!",
                chats: user.chats
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                sucess: false,
                data: error.message
            }
        )
    }
    
}

export const loadChats = async (req, res) => {
    try {
        const userEmail = req.user.email
        const user = await UserModel.findOne({email: userEmail})
        return res.status(200).json({ chats: user.chats })
        
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

export const deleteChats = async (req, res) => {
    try {
        const userEmail = req.user.email
        const chatId = req.body.id
        const user = await UserModel.findOne({email: userEmail})     
        user.chats.splice(id, 1)
        user.save()
        return res.status(200).json({ message: "Chat deleted!" })
        
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

export const deleteAllChats = async (req, res) => {
    try {
        const userEmail = req.user.email
        const result = await UserModel.updateOne({ email: userEmail }, { chats: [] })

        return res.status(200).json({ message: "All chats deleted!" })
        
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

export const deleteUser = async (req, res) => {
    const data = req.body
    try {
        const deletedUser = await UserModel.findOneAndDelete({ email: data.email })
        
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' })
        }
    
        return res.status(200).json({ message: 'User deleted successfully' })
      } catch (error) {
        return res.status(500).json({ error: 'Could not delete user' })
      }
}

export const getUser = async (req, res) => {
    const { email } = req.params

    try {
        if (!email){
            return res.status(501).json({ error: 'Invalid email' })
        }

        const user = await UserModel.findOne({email: email})

        if (!user){
            return res.status(501).json({ error: 'Couldnt find the email' })
        }

        return res.status(201).json(user)

    } catch (error) {
        return res.status(404).json({ error: 'User not found!' })
    }
}