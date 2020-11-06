"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebaRoutes = void 0;
const express_1 = require("express");
class PruebaRoutes {
    constructor() {
        // Definimos las funciones asociadas a las rutas
        this.getPrueba = (req, res) => {
            res.send('Estoy en la /p de la app (con o sin prefijo). Utilizando una función');
        };
        this._router = express_1.Router();
    }
    get router() {
        return this._router;
    }
    // Aplicamos a la variable de tipo Router métodos get con rutas y las funciones que realizan
    // https://expressjs.com/es/4x/api.html#router.METHOD
    // Para más tarde usarlas en el servidor
    misRutas() {
        this._router.get('/', (req, res) => res.send('Estoy en la raiz (con o sin prefijo) de la app. Sin función'));
        this._router.get('/p', this.getPrueba);
    }
}
// Creamos el objeto 
const obj = new PruebaRoutes();
// ejecutamos la asociación rutas > funciones
obj.misRutas();
// Exportamos el parámetro de tipo Router con las rutas asignadas
// Para su uso en el servidor
exports.pruebaRoutes = obj.router;
