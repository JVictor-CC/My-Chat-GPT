import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const corsOptions = {
  origin: ['http://localhost:3000', 'https://api.openai.com/v1/chat/completions'],
  optionsSuccessStatus: 200,
}

const server = express()
server.use(express.json())
server.use(cors(corsOptions))
server.use(router)

export default server
