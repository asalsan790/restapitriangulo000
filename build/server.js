"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const pruebaRoutes_1 = require("./routes/pruebaRoutes");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // Para que muestre las url invocadas
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
    routes() {
        this.app.use(pruebaRoutes_1.pruebaRoutes);
        // Si queremos que todas las rutas tengan un prefijo y poder llamarlas con él:
        this.app.use('/prefijo', pruebaRoutes_1.pruebaRoutes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port: ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
