import {Request, Response, Router } from 'express'
import { Triangulos } from '../model/triangulo'

class TrianguloRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getTriangulos = async (req: Request, res: Response) => {
        console.log('hola')
        const query = await Triangulos.find()
        res.json(query)
    }
  
    misRutas(){
        console.log('en mis rutas')
        this._router.get('/', this.getTriangulos)
    }
}

const obj = new TrianguloRoutes()
obj.misRutas()
export const trianguloRoutes = obj.router
