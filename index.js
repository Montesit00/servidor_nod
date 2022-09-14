//Conexiones
const express = require('express')
const dato = express();

//Uso los datos de los otros archivos
dato.use(express.json())
dato.use(require('./src/rutas/rutas'))

//Compruebo si funciona el servidor
dato.listen(3000,()=>{
    console.log('Funciona')
})