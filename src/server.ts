import express from 'express'
import morgan from 'morgan'

import { pruebaRoutes } from './routes/pruebaRoutes'

class Server {
    private app: express.Application
    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }
    private config(){
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))  // Para que muestre las url invocadas
    }

    // Usamos la variable tipo Router definida en la clase
    // https://expressjs.com/es/4x/api.html#app.use
    /*
        En concreto usamos la sintáxis de la página anterior, aunque sin next() en nuestro caso:
        var router = express.Router();
        router.get('/', function (req, res, next) {
                next();
        });
        app.use(router);
    */
    private routes(){
        this.app.use(pruebaRoutes)
        // Si queremos que todas las rutas tengan un prefijo y poder llamarlas con él:
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
