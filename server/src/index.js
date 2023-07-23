import server from './app.js'
import connectToDB from './database/db.js'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
const uri = process.env.MONGODB_ATLAS_URI

const startServer = () => {
    try {
        connectToDB(uri).then(() => server.listen(port, () => {
            console.log(`Servidor iniciado na em: http://localhost:${port}/`)
        }))
    } catch(error) {
        console.log('Could not start the server!')
    }
}

startServer()