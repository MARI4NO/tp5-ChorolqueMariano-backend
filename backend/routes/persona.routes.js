const express = require('express')
const personaController = require('../controllers/persona.controller')

var router = express.Router()

router.post("/crear",personaController.darAltaPersona)
router.get("/recuperar",personaController.recuperarPersonas)
router.get("/recuperarId",personaController.recuperarPersonaId)

module.exports = router