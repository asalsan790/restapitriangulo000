import express from 'express'
import morgan from 'morgan'

import { pruebaRoutes } from './routes/pruebaRoutes'
import { trianguloRoutes } from './routes/trianguloRoutes'
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

        const bdLocal = 'geometria'
        const bdAltas = 'prueba'
        const userAtlas = 'prueba' // Comentar después de desplegar a heroku
        const passAtlas = 'prueba' // Comentar después de desplegar a heroku
        const conexionLocal = `mongodb://localhost/${bdLocal}`
        const conexionAtlas =  
            `mongodb+srv://${userAtlas}:${passAtlas}@cluster0.viyli.mongodb.net/${bdAltas}?retryWrites=true&w=majority`

        // mongodb+srv://<username>:<password>@cluster0.viyli.mongodb.net/<dbname>?retryWrites=true&w=majority

        db.cadenaConexion = conexionLocal
        await db.conectarBD()
        .then((mensaje) => {
            console.log(mensaje)
        })
        .catch((mensaje) => {
            console.log(mensaje)
        })

        /*
        await db.desconectarBD()
        .then((mensaje) => {
            console.log(mensaje)
        })
        .catch((mensaje) => {
            console.log(mensaje)
        })
*/
    }

    private routes(){
        this.app.use('/triangulo', trianguloRoutes)
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
