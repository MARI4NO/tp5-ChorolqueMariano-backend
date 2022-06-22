const mongoose = require('mongoose')
const {Schema} = mongoose

const libroSchema = new Schema({
    titulo:{
        type:String,
        required:true
        //default:""
        
    },
    descripcion:{
        type:String,
        required:false,
        default:"mongo"
    },
    stock:{
        type:Number,
        required:true
    },
    imagen:{
        type:String,
        required:true
    },
    destacado:{
        type:Boolean,
        required:true
    }


});
module.exports= mongoose.models.Libro||mongoose.model("Libro",libroSchema)