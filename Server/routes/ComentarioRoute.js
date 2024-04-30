const express = require('express');
const ComentarioRouter = express.Router();
const MainController = require('../controllers/MainController');

// Rutas para comentarios
/**TO DO:  AGREGAR RUTA O MODIFICAR HANDLER*/
ComentarioRouter.get('/', MainController.getAllComentarios);
ComentarioRouter.post('/', MainController.createComentario);

module.exports = ComentarioRouter;
