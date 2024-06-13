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
router.post('/usuario/logout', usuarioMiddleware.usuarioLogged, usuarioController.logoutUsuario);


/**
 * Restablecer contrasenna
 */
router.post('/usuario/resetpassword-request', usuarioController.resetPassword);
router.post('/usuario/resetpassword', usuarioController.resetPasswordToken);
/**
 * Restablecer contrasenna para el estudiante
 * @param {id} id debe de ser correo del estudiante
 */
router.put('/usuario/resetpassword/:id', usuarioController.resetPasswordEstudiante);

module.exports = router;