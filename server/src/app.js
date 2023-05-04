import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'
import * as dotenv from 'dotenv'

dotenv.config()

const server = express()
server.use(cors())
server.use(router)

export default server