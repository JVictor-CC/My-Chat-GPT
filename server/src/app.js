import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const server = express()
server.use(express.json())
server.use(cors(corsOptions))
server.use(router)

export default server