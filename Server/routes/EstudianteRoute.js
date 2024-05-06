const express = require('express');
const multer = require('multer');
const EstudianteController = require('../controllers/EstudianteController');
const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});

//Rutas
router.get('/', EstudianteController.getAllEstudiantes);
router.get('/:id', EstudianteController.getEstudianteById);
router.post('/', EstudianteController.createEstudiante);
router.put('/:id', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);
router.post('estudiantes/upload', upload.single('file'), EstudianteController.createEstudianteFromFile);

module.exports = router;
