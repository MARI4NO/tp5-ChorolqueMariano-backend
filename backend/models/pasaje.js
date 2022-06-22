const mongoose = require('mongoose')
const Persona = require('./persona')
const {Schema} = mongoose

/*precioPasaje: Number - 
categoriaPasajero: String - 
fechaCompra: String - 
pasajero: Persona (Schema.Types.ObjectId) categoría del pasajero puede ser: m = Menor, a = Adulto, j= Jubilado.  */
const pasajeSchema = new Schema({
    precioPasaje:{
        type:Number,
        required:true
        //default:""
        
    },
    categoriaPasajero:{
        type:String,
        required:false,
        default:"mongo"
    },
    fechaCompra:{
        type:String,
        required:true
    },
    pasajero:{
        type:Schema.Types.ObjectId,
        ref: Persona,
        required:true
    }
    });
module.exports= mongoose.models.Pasaje||mongoose.model("Pasaje",pasajeSchema)