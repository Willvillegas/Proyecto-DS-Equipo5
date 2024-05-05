const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');

router.get('/usuario/:id', UsuarioController.getUsuarioById);
router.post('/usuario/login', UsuarioController.loginUsuario);
module.exports = router;