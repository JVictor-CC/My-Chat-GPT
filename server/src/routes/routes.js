import express from 'express'
import { createChat, loginUser, registerUser, sendMessage, deleteUser, loadChats, authenticate, getUser, deleteChats, deleteAllChats } from '../controllers/controller.js'

const router = express.Router()

router.post('/login', loginUser)

router.post('/register', registerUser)

router.post('/sendMessage', authenticate, sendMessage)

router.post('/createChat', authenticate, createChat)

router.get('/user/:email', getUser)

router.get('/loadChats', authenticate, loadChats)

router.put('/deleteChats', authenticate, deleteChats)

router.put('/deleteAllChats', authenticate, deleteAllChats)

router.delete('/deleteUser', deleteUser)

export default router