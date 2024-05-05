const express = require('express');
const ProfesorRouter = express.Router();
const ProfesorController = require('../controllers/ProfesorController');
/* Lo anterior se excluye debido a que no se definirá un main controller 
const MainController = require('../controllers/MainController');
*/
// Rutas para profesores
/** TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
ProfesorRouter.get('/', ProfesorController.getAll);
ProfesorRouter.get('/:id', ProfesorController.getById);
//ProfesorRouter.put('/:id', null /*MainController.updateProfesor*/);

module.exports = ProfesorRouter;
