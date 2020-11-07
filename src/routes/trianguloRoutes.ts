import {Request, Response, Router } from 'express'

class TrianguloRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    // Definimos las funciones asociadas a las rutas
    private getPrueba = (req: Request, res: Response) => { 
        res.send('Estoy en la /p de la app (con o sin prefijo). Utilizando una función') 
    }
    // Aplicamos a la variable de tipo Router métodos get con rutas y las funciones que realizan
    // https://expressjs.com/es/4x/api.html#router.METHOD
    // Para más tarde usarlas en el servidor
    misRutas(){
        this._router.get('/',
            (req: Request, res: Response) => 
                    res.send('Estoy en la raiz (con o sin prefijo) de la app. Sin función')
        )
        this._router.get('/p', this.getPrueba)
    }
}

// Creamos el objeto 
const obj = new TrianguloRoutes()
// ejecutamos la asociación rutas > funciones
obj.misRutas()
// Exportamos el parámetro de tipo Router con las rutas asignadas
// Para su uso en el servidor
export const trianguloRoutes = obj.router
