const Transaccion =require('../models/transaccion')
const transaccionController={};

//dar de alta una transaccion (post)
transaccionController.darAltaTransaccion= async (request,response)=>{
    //console.log(request)
    var transaccion = new Transaccion(request.body);
    try {
        await transaccion.save();
        response.status(200).json({
            mensaje:"LA TRANSACCION SE GUARDO CORRECTAMENTE"
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            mensaje:"La transaccion no se pudo guardar"
        })
    }
}
//Recuperar TODAS las Transacciones Registradas (GET)
transaccionController.recuperarTransacciones=async (peticion,respuesta)=>{
    try {
        var Transacciones= await Transaccion.find()
        respuesta.status(200).json({
            mensaje:"se recuperaron las transacciones",
            transacciones: Transacciones
        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar las transacciones"
        })
    }
}
//Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionController.RecuperarTransaccionEmail = async (peticion,respuesta)=>{
    try {
        const email = peticion.query.email
        var Transacciones = await Transaccion.find({emailCliente: email})
        
        respuesta.status(200).json({
            mensaje:"se recuperaron las transacciones",
            transacciones: Transacciones
        })
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar los libros"
        })
    }
}
//Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET). Utilice el concepto de PARAMS
transaccionController.RecuperarTransaccionDivisa = async (peticion,respuesta)=>{
    try {
        var origen = peticion.params.monedaOrigen
        var destino = peticion.params.monedaDestino
        var Transacciones = await Transaccion.find({
            $and: [
            {monedaOrigen: origen}, 
            {monedaDestino: destino}
            ]
        })
        respuesta.status(200).json({
            mensaje:"se recuperaron las transacciones",
            transacciones: Transacciones
        })
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar los libros"
        })
    }
}
module.exports = transaccionController