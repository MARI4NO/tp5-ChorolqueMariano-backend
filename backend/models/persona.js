const mongoose = require('mongoose')
const {Schema} = mongoose

const personaSchema = new Schema({
    apellido:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:false,
    },
    nro_Documento:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
module.exports= mongoose.models.Persona||mongoose.model("Persona",personaSchema)