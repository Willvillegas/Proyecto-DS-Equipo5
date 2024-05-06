const express = require('express');
const router = express.Router();
const AsistenteController = require('../controllers/AsistenteController');

//Rutas
router.get('/', AsistenteController.getAllAsistentes);
router.get('/:id', AsistenteController.getAsistenteById);
router.post('/', AsistenteController.createAsistente);
router.put('/:id', AsistenteController.updateAsistente);

module.exports = router;
