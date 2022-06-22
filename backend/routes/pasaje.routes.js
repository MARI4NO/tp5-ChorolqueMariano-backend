const express = require('express')
const pasajeController = require('../controllers/pasaje.controller')

var router = express.Router()

router.post("/crear",pasajeController.darAltaPasaje)
router.get("/recuperar",pasajeController.recuperarPasaje)
router.delete("/eliminar/:id",pasajeController.eliminarPasaje)
router.put("/actualizar",pasajeController.actualizarPasaje)
router.get("/recuperarCategoria",pasajeController.ObtenerPasajeCategoria)
router.get("/recuperar/:id",pasajeController.obtenerPasaje)

module.exports = router