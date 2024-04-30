const express = require('express');
const ProfesorRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para profesores
/** TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
ProfesorRouter.get('/', MainController.getAllProfesores);
ProfesorRouter.get('/:id', MainController.getProfesorById);
ProfesorRouter.put('/:id', MainController.updateProfesor);

module.exports = ProfesorRouter;
