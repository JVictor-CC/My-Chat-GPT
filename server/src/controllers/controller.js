import { openai } from "../services/api.js"
import UserModel from '../models/User.model.js'
import bcrypt from 'bcrypt'


export const loginUser = async (req, res) => {
    const data = req.body
    try {
        const user = await UserModel.findOne({email: data.email})
        if(!user) {
            throw new Error('Invalid email or password!')
        }
        const matchPassword = await bcrypt.compare(data.password, user.password)
        if(!matchPassword) {
            throw new Error('Invalid email or password!')
        }

        // * Autenticate User JWT

        return res.status(200).json(
            {
                sucess: true,
                data: 'Successfully signed in'
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

export const registerUser = async (req, res) => {
    const data = req.body
    try {
        const emailExists = await UserModel.findOne({email: data.email})
        if(emailExists) {
            throw new Error('Email already in use');
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
                sucess: true,
                data: 'User successfully registered'
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

export const sendMessage = async (req, res) => {
    try {
        console.log(req.body.prompt)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${req.body.prompt}`,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        })
        return res.status(200).json(
            {
                success: true,
                data: response.data.choices[0].text
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

