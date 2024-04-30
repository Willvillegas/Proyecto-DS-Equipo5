const express = require('express');
const EquipoGuiaRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para equipos guía
/** TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
EquipoGuiaRouter.get('/', MainController.getAllEquiposGuia);
EquipoGuiaRouter.post('/', MainController.createEquipoGuia);
EquipoGuiaRouter.put('/:id', MainController.updateEquipoGuia);
EquipoGuiaRouter.delete('/:id', MainController.deleteEquipoGuia);

module.exports = EquipoGuiaRouter;
