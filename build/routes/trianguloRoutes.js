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
Object.defineProperty(exports, "__esModule", { value: true });
exports.trianguloRoutes = void 0;
const express_1 = require("express");
const triangulo_1 = require("../model/triangulo");
class TrianguloRoutes {
    constructor() {
        this.getTriangulos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('hola');
            const query = yield triangulo_1.Triangulos.find();
            res.json(query);
        });
        this._router = express_1.Router();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        console.log('en mis rutas');
        this._router.get('/', this.getTriangulos);
    }
}
const obj = new TrianguloRoutes();
obj.misRutas();
exports.trianguloRoutes = obj.router;
