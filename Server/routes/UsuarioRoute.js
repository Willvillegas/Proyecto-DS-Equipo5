const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController.js');
const usuarioMiddleware = require('../middleware/UsuarioMiddleware.js');

router.get('/usuario/:id',usuarioMiddleware.usuarioLogged, usuarioController.getUsuarioById);
/*
* router.post('/usuario/login', UsuarioController.loginUsuario);
* la el user y password se envian en el body de la peticion la contraseña debe estar encriptada en bcrypt con salt de 10
*/
router.post('/usuario/login', usuarioController.loginUsuario);
module.exports = router;