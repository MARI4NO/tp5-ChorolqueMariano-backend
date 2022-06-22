const Pasaje =require('../models/pasaje')
const Persona = require("../models/persona")
const pasajeController={};

//dar de alta una transaccion (post)
pasajeController.darAltaPasaje= async (peticion,respuesta)=>{
    //console.log(request)
    var pasaje = new Pasaje(peticion.body);
    try {
        if(peticion.body.categoriaPasajero != "m" && peticion.body.categoriaPasajero != "a" && peticion.body.categoriaPasajero != "j"){
            throw new Error("Categoria de pasaje no valida")
            
        }
        const persona = await Persona.findOne({ _id: pasaje.pasajero})
        if(!persona){
            throw new Error("No existe la persona")
        }
        pasaje.pasajero._id = peticion.body.pasajero._id 
        await pasaje.save();
        respuesta.status(200).json({
            mensaje:"EL PASAJERO SE GUARDO CORRECTAMENTE"
        })
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"El pasajero no se pudo guardar"
        })
    }
}
pasajeController.recuperarPasaje=async (peticion,respuesta)=>{
    try {
        
        var Pasajes= await Pasaje.find().populate("pasajero")
    
        respuesta.status(200).json({
            mensaje:"se recuperaron las pasajes",
            pasajes: Pasajes
        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar las personas"
        })
    }
}
pasajeController.eliminarPasaje= async (peticion,respuesta)=>{
    try {
        
        var id = peticion.params.id
        await Pasaje.findByIdAndRemove(id)
        respuesta.status(200).json({
            mensaje:"se elimino correctamente el libro",
        })

    } catch (error) {
        respuesta.status(500).json({
            mensaje:"no se pudo eliminar el libro "
        })
        console.log(error)
    }
}

pasajeController.actualizarPasaje = async(peticion,respuesta)=>{

    const pasaje = new Pasaje(peticion.body)
    try {
        if(peticion.body.categoriaPasajero != "m" && peticion.body.categoriaPasajero != "a" && peticion.body.categoriaPasajero != "j"){
            throw new Error("Categoria de pasaje no valida") 
        }
        //actualiza los datos del pasaje con el id 
        var id =peticion.body._id
        pasaje.pasajero._id = peticion.body.pasajero._id
        await Pasaje.findByIdAndUpdate(id,pasaje)
        respuesta.status(200).json({
            mensaje:"se actualizo de die"
        })
    } catch (error) {
        respuesta.status(500).json({
            mensaje:"no se pudo actualizar"
        })
       
    }
}

pasajeController.obtenerPasaje = async (peticion, respuesta) => {
    try {
        const pasaje = await Pasaje.findById(peticion.params.id).populate("pasajero")
        respuesta.status(200).json({
            pasaje:pasaje,
            mensaje: "se obtuvo el pasaje correctamente"
        })
    } catch (error) {
        console.log(error)
        respuesta.status(400).json({
            mensaje: "Error al obtener el pasaje"
        })
    }
}
pasajeController.ObtenerPasajeCategoria = async(peticion,respuesta)=>{
    try {
        //categoria creada ,y categoria actualizada
        const categoria = peticion.query.categoria
        
        const pasajes = await Pasaje.find({ categoriaPasajero: categoria }).populate("pasajero")
        console.log(categoria)
        respuesta.status(200).json({
            mensaje:"se obtuvo de die",
            pasajes: pasajes
        })
    } catch (error) {
        respuesta.status(500).json({
            mensaje:"no se pudo obtener"
        })
        console.log(error)
    }
}

module.exports = pasajeController