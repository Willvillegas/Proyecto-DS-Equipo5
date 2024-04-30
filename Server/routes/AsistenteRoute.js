const express = require('express');
const AsistenteRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para asistentes
/**TO DO: AGREGAR RUTA O MODIFICAR HANDLER*/
AsistenteRouter.get('/', MainController.getAllAsistentes);
AsistenteRouter.get('/:id', MainController.getAsistenteById);
AsistenteRouter.put('/:id', MainController.updateAsistente);

module.exports = AsistenteRouter;
