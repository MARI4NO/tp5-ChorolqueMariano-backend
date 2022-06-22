const express = require('express')
const transaccionController = require('../controllers/transaccion.controller')

var router = express.Router()

router.post("/crear",transaccionController.darAltaTransaccion)
router.get("/recuperar",transaccionController.recuperarTransacciones)
router.get("/recuperarEmail",transaccionController.RecuperarTransaccionEmail)
router.get("/recuperarDivisa/:monedaOrigen/:monedaDestino",transaccionController.RecuperarTransaccionDivisa)


module.exports = router