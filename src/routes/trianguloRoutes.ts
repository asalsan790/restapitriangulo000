import {Request, Response, Router } from 'express'
import { Triangulos } from '../model/triangulo'
import { db } from '../database/database'

class TrianguloRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getTriangulos = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query = await Triangulos.find()
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
            console.log(mensaje)
        })

        db.desconectarBD()
    }
  
    misRutas(){
        this._router.get('/', this.getTriangulos)
    }
}

const obj = new TrianguloRoutes()
obj.misRutas()
export const trianguloRoutes = obj.router
