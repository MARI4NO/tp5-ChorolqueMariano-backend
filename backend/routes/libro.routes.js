const express = require('express')
const libroController = require('../controllers/libro.controller')

var router = express.Router()

router.post("/crear",libroController.darAltaLibro)
router.get("/recuperar",libroController.recuperarLibros)
router.delete("/eliminar/:id",libroController.eliminarLibro)
router.put("/actualizar",libroController.actualizarLibro)
router.get("/destacados",libroController.recuperarLibrosDestacados)

module.exports = router