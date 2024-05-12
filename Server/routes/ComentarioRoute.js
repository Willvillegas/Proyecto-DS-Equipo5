const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController');

//Rutas
router.get('/comentarios/:id', ComentarioController.getAllComentarios);
router.get('/respuestas', ComentarioController.getAllRespuestas);
router.get('/comentario/:id', ComentarioController.getComentarioById);
router.post('/comentarios', ComentarioController.createComentario);
router.put('/comentarios/:id', ComentarioController.updateComentario);
router.delete('/comentarios/:id', ComentarioController.deleteComentario);

module.exports = router;
