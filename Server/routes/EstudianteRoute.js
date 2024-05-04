const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

//Rutas
router.get('/', EstudianteController.getAllEstudiantes);
router.get('/:id', EstudianteController.getEstudianteById);
router.post('/', EstudianteController.createEstudiante);
router.put('/:id', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);

module.exports = router;
