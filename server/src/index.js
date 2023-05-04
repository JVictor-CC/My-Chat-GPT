import server from './app.js'

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor iniciado na em: http://localhost:${port}/`)
})