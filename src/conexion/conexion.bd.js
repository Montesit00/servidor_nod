const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://monte:monte123@monte.xnfkexl.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('Conectado'))
.catch((err)=>console.log(err))
