const express = require('express');
const router = express.Router();
const ActividadController = require('../controllers/ActividadController');

//Rutas
router.get('/', ActividadController.getAll);
router.get('/:id', ActividadController.getById);
router.post('/', ActividadController.create);
router.put('/:id', ActividadController.update);
router.delete('/:id/:observacion', ActividadController.delete);
router.put('/finish/:id', ActividadController.finish);

module.exports = router;

