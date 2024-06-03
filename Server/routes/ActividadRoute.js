const express = require('express');
const multer = require('multer');
const router = express.Router();
const ActividadController = require('../controllers/ActividadController');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rutas
router.get('/:id', ActividadController.getAllActividades);
router.get('/actividad/:id', ActividadController.getActividadById);
router.get('/actividad/afiche/:id', ActividadController.getAficheActividadById);
router.post('/', upload.single('afiche'),ActividadController.createActividad);
router.put('/:id', ActividadController.updateActividad);
router.delete('/:id/:observacion', ActividadController.deleteActividad);
router.put('/finish/:id', ActividadController.finishActividad);

module.exports = router;
