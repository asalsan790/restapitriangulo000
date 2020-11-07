import express from 'express'
import morgan from 'morgan'

import { pruebaRoutes } from './routes/pruebaRoutes'
import { db } from './database/database'

class Server {
    private app: express.Application
    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }
    private async config(){

        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))  // Para que muestre las url invocadas

        const bdLocal = 'test'
        const bdAltas = 'prueba'
        const conexionLocal = `mongodb://localhost/${bdLocal}`
        const conexionAtlas =  
            `mongodb+srv://prueba:prueba@cluster0.viyli.mongodb.net/${bdAltas}?retryWrites=true&w=majority`

        // mongodb+srv://<username>:<password>@cluster0.viyli.mongodb.net/<dbname>?retryWrites=true&w=majority

        db.cadenaConexion = conexionAtlas
        await db.conectarBD()
        .then((mensaje) => {
            console.log(mensaje)
        })
        .catch((mensaje) => {
            console.log(mensaje)
        })

        await db.desconectarBD()
        .then((mensaje) => {
            console.log(mensaje)
        })
        .catch((mensaje) => {
            console.log(mensaje)
        })

    }

    private routes(){
        this.app.use(pruebaRoutes)
        this.app.use('/prefijo', pruebaRoutes)
    }
    start(){
        this.app.listen(this.app.get('port'), 
        () => {
            console.log(`Server on port: ${this.app.get('port')}`)
        })
    }
}
const server = new Server()
server.start()
