const express = require('express');
const multer = require('multer');
const EstudianteController = require('../controllers/EstudianteController');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//Rutas
router.get('/', EstudianteController.getAllEstudiantes);
router.get('/:id', EstudianteController.getEstudianteById);
router.post('/', EstudianteController.createEstudiante);
router.put('/:id', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);
//exportar un xlsx con los datos
router.post('/upload', upload.single('file'), EstudianteController.createEstudianteFromFile);
//importar un xlsx con los datos
router.get('/download', EstudianteController.createFileFromEstudiantes);

module.exports = router;
