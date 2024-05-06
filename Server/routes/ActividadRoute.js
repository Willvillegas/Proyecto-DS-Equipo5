const express = require('express');
const router = express.Router();
const ActividadController = require('../controllers/ActividadController');

// Rutas
router.get('/', ActividadController.getAllActividades);
router.get('/:id', ActividadController.getActividadById);
router.post('/', ActividadController.createActividad);
router.put('/:id', ActividadController.updateActividad);
router.delete('/:id/:observacion', ActividadController.deleteActividad);
router.put('/finish/:id', ActividadController.finishActividad);

module.exports = router;
