

//librearias o modulos
//mongoose es tambien un js
const mongoose = require('mongoose');
//variables o constantes
const urlBD= "mongodb://localhost:27017/tp5"
//operaciones
//conectar a la bd
mongoose.connect(urlBD).then(
    db=>{
        console.log("se conecto exitosamente a la Base de Datos")
    }
).catch(
    error=>{
        console.log(error)
    }
)
//exports

module.exports=mongoose;