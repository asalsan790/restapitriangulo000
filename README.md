# REST API Primeros pasos


// iniciar proyecto node.js
*npm init -y*   // Se crea el package.json
// instalar typescript local si no se instaló global
*npm i typescript --save-dev*         //Local
*npm i typescript -g*                 //Global
// Iniciar proyecto typescript
https://medium.com/@bhagyamangale/tsc-init-4665ec9d7b09

*tsc --init*                         //Si global. Se crea el tsconfig.json
*npx tsc --init*                     //Si local. Se crea el tsconfig.json

*git init*                            // Para crear el repositorio local

// Cambiamos la configuración del *tsconfig.json*
*"target": "es6",*

*"outDir": "./build",*

// Instalación de express, mongoose y morgan

https://dev.to/mtee/getting-started-with-morgan-3d1m

// Morgan is a middleware function for logging information 

// about the http request/response in a server application.

// Un middleware es un bloque de código que se ejecuta entre 

// la petición que hace el usuario (request) hasta que la petición llega al servidor.

*npm i express mongoose morgan*

// nodemon is a tool that helps develop node.js based 
// applications by automatically restarting the node 
// application when file changes in the directory are detected.

// Instalamos los tipos de datos y módulos de desarrollo

npm install @types/node @types/mongoose @types/express @types/morgan nodemon typescript -D


// Configuramos el *.gitignore* con:
*build*
*node_modules*

// Creamos la carpeta *src* con *server.ts*   //Archivo typescript
Con el contenido que presentamos

// Cambiamos el package.json con:

  "scripts": {
    "ts": "tsc -w",
    "dev": "nodemon ./build/server.js",
    "start": "node ./build/server.js"
  },

  // Para compilar
  npm run ts
  // Para ejecutar en desarrollo
  npm run dev
  // Para ejecutar en producción
  npm start
  
