import express from 'express'
import { createChat, loginUser, registerUser, saveChat, sendMessage, deleteUser, loadChats, loadChatMessages, authenticate, getUser } from '../controllers/controller.js'

const router = express.Router()

router.post('/login', loginUser)

router.post('/register', registerUser)

router.post('/sendMessage', authenticate, sendMessage)

router.post('/createChat', authenticate, createChat)

router.put('/saveChat', saveChat)

router.get('/user/:email', getUser)

router.get('/loadChats', loadChats)

router.delete('/deleteUser', deleteUser)

export default router