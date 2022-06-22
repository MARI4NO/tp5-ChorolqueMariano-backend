const Persona =require('../models/persona')
const personaController={};

//dar de alta una transaccion (post)
personaController.darAltaPersona= async (request,response)=>{
    //console.log(request)
    var persona = new Persona(request.body);
    try {
        await persona.save();
        response.status(200).json({
            mensaje:"LA PERSONA SE GUARDO CORRECTAMENTE"
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            mensaje:"La PERSONA no se pudo guardar"
        })
    }
}
personaController.recuperarPersonas=async (peticion,respuesta)=>{
    try {
        var Personas= await Persona.find()
        respuesta.status(200).json({
            mensaje:"se recuperaron las personas",
            personas: Personas
        })
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar las personas"
        })
    }
}
personaController.recuperarPersonaId=async (peticion,respuesta)=>{
    try {
        var id = peticion.query.id
        var persona= await Persona.findById(id)
        respuesta.status(200).json({
            mensaje:"se recupero la persona",
            persona: persona
        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar la persona"
        })
    }
}
module.exports = personaController