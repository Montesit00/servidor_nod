//Conexiones
const path = require('path')
const express = require('express')
const dato = express();

//Uso los datos de los otros archivos
dato.use(express.json())
dato.use(require('./src/rutas/rutas'))

//recurso estatico
dato.use(express.static(path.join(__dirname, "public")))

//Compruebo si funciona el servidor
dato.listen(3000,()=>{
    console.log('Funciona')
})