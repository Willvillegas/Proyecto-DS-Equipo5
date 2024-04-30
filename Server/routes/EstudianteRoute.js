const express = require('express');
const EstudianteRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para estudiantes
/**TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
EstudianteRouter.get('/', MainController.getAllEstudiantes);
EstudianteRouter.post('/', MainController.createEstudiante);

module.exports = EstudianteRouter;
