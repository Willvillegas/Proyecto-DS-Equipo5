const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');
const UsuarioLogged = require('../middleware/UsuarioLogged.js');

router.get('/usuario/:id',UsuarioLogged, UsuarioController.getUsuarioById);
/*
* router.post('/usuario/login', UsuarioController.loginUsuario);
* la el user y password se envian en el body de la peticion la contraseña debe estar encriptada en bcrypt con salt de 10
*/
router.post('/usuario/login', UsuarioController.loginUsuario);
module.exports = router;