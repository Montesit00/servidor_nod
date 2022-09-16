const Tarea = require("../models/tareas");

const controlTarea = {}

controlTarea.getTarea = (req,res) => {
    res.send({
        msg:'Funciona el GET'
    })
}

controlTarea.postTarea = async (req, res) => {
    const {titulo,descrip} = req.body;
    const newTarea = new Tarea({
        titulo,
        descrip
    }); 

    const tarea = await newTarea.save();

    return res.json({
        msg: 'Tarea creada correctamente',
        tarea
    });
}

controlTarea.putTarea = (req,res) => {
    res.send({
        msg:'Funciona el PUT'
    })
}

controlTarea.deleteTarea = (req,res) => {
    res.send({
        msg:'Funciona el Delete'
    })
}

module.exports = controlTarea;