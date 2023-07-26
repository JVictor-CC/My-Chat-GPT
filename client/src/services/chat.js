import axios from 'axios'
import { toast } from "react-toastify"

export async function createChat(token,chatName) {
    try {
        const response = await axios.post('http://localhost:8080/createChat',
        {
            chatName: chatName
        },
        {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        })
        return response.data.chats  
        
    } catch (error) {
        toast.error("Couldn't load the user chats!")
        return false
    }
}

export async function loadChats(token) {
    try {
        const response = await axios.get('http://localhost:8080/loadChats', {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        })
        return response.data.chats  
        
    } catch (error) {
        toast.error("Couldn't load the user chats!")
        return false
    }
}

export async function deleteAllChats(token) {
    try {
        const response = await axios.put('http://localhost:8080/deleteAllChats', {},
        {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        })
        toast.success(response.data.message)
        return true 
        
    } catch (error) {
        toast.error("Couldn't delete the user chats!")
        return false
    }
}

export async function sendMessage(token, message, selectedChat) {
    try {
        console.log(selectedChat)
        const response = await axios.post('http://localhost:8080/sendMessage', 
        {
            message: message.text,
            chatIndex: selectedChat
        },
        {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        })
        return response  
        
    } catch (error) {
        toast.error("Couldn't save the user chat!")
        return false
    }
}