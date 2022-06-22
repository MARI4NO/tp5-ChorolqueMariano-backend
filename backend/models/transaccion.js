const mongoose = require('mongoose')
const {Schema} = mongoose

const transaccionSchema = new Schema({
    monedaOrigen:{
        type:String,
        required:true
        //default:""
    },
    cantidadOrigen:{
        type:Number,
        required:false,
        default:"0"
    },
    monedaDestino:{
        type:String,
        required:true
    },
    cantidadDestino:{
        type:Number,
        required:true
    },
    emailCliente:{
        type:String,
        required:true
    },
    tasaConversion:{
        type:Number,
        required:false
    }


});
module.exports= mongoose.models.Transaccion||mongoose.model("Transaccion",transaccionSchema)