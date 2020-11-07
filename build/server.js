"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const pruebaRoutes_1 = require("./routes/pruebaRoutes");
const trianguloRoutes_1 = require("./routes/trianguloRoutes");
const database_1 = require("./database/database");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.set('port', process.env.PORT || 3000);
            this.app.use(morgan_1.default('dev')); // Para que muestre las url invocadas
            const bdLocal = 'geometria';
            const bdAltas = 'prueba';
            const userAtlas = 'prueba'; // Comentar después de desplegar a heroku
            const passAtlas = 'prueba'; // Comentar después de desplegar a heroku
            const conexionLocal = `mongodb://localhost/${bdLocal}`;
            const conexionAtlas = `mongodb+srv://${userAtlas}:${passAtlas}@cluster0.viyli.mongodb.net/${bdAltas}?retryWrites=true&w=majority`;
            // mongodb+srv://<username>:<password>@cluster0.viyli.mongodb.net/<dbname>?retryWrites=true&w=majority
            database_1.db.cadenaConexion = conexionLocal;
            yield database_1.db.conectarBD()
                .then((mensaje) => {
                console.log(mensaje);
            })
                .catch((mensaje) => {
                console.log(mensaje);
            });
            /*
            await db.desconectarBD()
            .then((mensaje) => {
                console.log(mensaje)
            })
            .catch((mensaje) => {
                console.log(mensaje)
            })
    */
        });
    }
    routes() {
        this.app.use('triangulo', trianguloRoutes_1.trianguloRoutes);
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
