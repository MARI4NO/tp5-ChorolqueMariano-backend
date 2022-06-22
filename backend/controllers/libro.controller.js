
const Libro =require('../models/libro')
const libroController={};

//dar de alta un libro (post)
libroController.darAltaLibro= async (request,response)=>{
    //console.log(request)
    var libro = new Libro(request.body);
    try {
        await libro.save();
        response.status(200).json({
            mensaje:"EL LIBRO SE GUARDO CORRECTAMENTE"
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            mensaje:"EL libro no se pudo guardar"
        })
    }

    

}
libroController.recuperarLibros=async (peticion,respuesta)=>{
    try {
        var libros= await Libro.find()
        respuesta.status(200).json({
            mensaje:"se recuperaron los libros",
            libros: libros

        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar los libros"
        })
    }
}

libroController.eliminarLibro= async (peticion,respuesta)=>{
    try {
        //body :dato que se envian ->post
        //params:parametros por las rutas ,url ->get
        //query :parametros adicionale sque se agerega a la ruta->get
        //github.com/MARI4NO
        //GITHUB.COM/:id
        var id = peticion.params.id
        await Libro.findByIdAndRemove(id)
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
libroController.actualizarLibro = async(peticion,respuesta)=>{
    try {
        var id =peticion.query.id
        var libro = new Libro(peticion.body)
        libro._id =id
        await Libro.findByIdAndUpdate(id,libro)
        respuesta.status(200).json({
            mensaje:"se actualizo de die"
        })
    } catch (error) {
        respuesta.status(500).json({
            mensaje:"no se pudo actualizar"
        })
        console.log(error)
    }
}

libroController.recuperarLibrosDestacados=async (peticion,respuesta)=>{
    try {
        var libros= await Libro.find({"destacado":true})
        respuesta.status(200).json({
            mensaje:"se recuperaron los libros",
            libros: libros

        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.status(500).json({
            mensaje:"no se pudo recuperar los libros"
        })
    }
}
module.exports = libroController