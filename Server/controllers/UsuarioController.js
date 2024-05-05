const UsuarioDAO = require('../DAOs/UsuarioDAO.js');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//salt rounds is 10
//Class that represents the controller of the entity Usuario
class UsuarioController {
    //Method to get a user by id
    static async getUsuarioById(req, res) {
        const { id } = req.params;
        try {
            const usuario = await UsuarioDAO.getById(id);
            res.status(200).json(usuario[0]);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el usuario por ID.' });
        }
    }
    //Method to update a user
    static async updateUsuario(req, res) {
        const usuarioData = req.body;
        try {
            const result = await UsuarioDAO.update(usuarioData);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el usuario.' });
        }
    }
    static async loginUsuario(req, res) {
        const { correo, contrasenna } = req.body;
        try {
            const usuario = await UsuarioDAO.getById(correo);
            //const contr= await bycrypt.hash(contrasenna, 10);
            const objUsuario = usuario[0];
            const passwordCorrect = await bycrypt.compare(contrasenna, objUsuario.contrasenna);
            if (!passwordCorrect) {
                res.status(401).json({ error: 'Usuario o contranseña incorrecta' });
                return;
            }
            //generate token using jwt
            const token = jwt.sign({ correo: usuario},'Proyecto-DS', {expiresIn: 60 * 60 * 24 * 7});
            res.cookie('token', token, {httpOnly: true});
            res.status(200).json({usuario, token});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al hacer login.' });
        }
    }
}
module.exports = UsuarioController;