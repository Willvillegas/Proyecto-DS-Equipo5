const express = require('express');
const ActividadRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para actividades
/**TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
ActividadRouter.get('/', MainController.getAllActividades);
ActividadRouter.post('/', MainController.createActividad);
ActividadRouter.put('/:id', MainController.updateActividad);

module.exports = ActividadRouter;
