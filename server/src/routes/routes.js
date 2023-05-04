import express from 'express'
import { loginUser, registerUser, sendMessage } from '../controllers/controller.js'

const router = express.Router()

router.get('/login', loginUser)

router.post('/register', registerUser)

router.post('/sendMessage', sendMessage)


export default router