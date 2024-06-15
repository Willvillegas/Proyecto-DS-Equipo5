const UsuarioDAO = require('../DAOs/UsuarioDAO.js');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailSender = require('../utils/nodemailer.js');
const e = require('express');
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
            const objUsuario = usuario;
            console.log(usuario);
            //hago compare (contraseña de la base de datos, contraseña que me pasaron)
            //Si la base de datos están las contraseñas encriptadas, se debe cambiar la siguiente línea
            //const passwordCorrect = objUsuario.contrasenna === contrasenna;
            if (usuario.length != 0){
                /*const passwordCorrect = await bycrypt.compare(objUsuario.contrasenna,contrasenna);
                if (!passwordCorrect) {
                    res.status(401).json({ error: 'Usuario o contraseña incorrecta' });
                    return;
                }
                //generate token using jwt expiresIn: 7 days
                const token = jwt.sign({ correo: usuario},'Proyecto-DS', {expiresIn: 60 * 60 * 24 * 7});
                res.cookie('token', token, {httpOnly: true});*/
                return res.status(200).json(usuario[0]);
            }else{
                return res.status(401).json(50000);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al hacer login.' });
        }
    }
    //Method logoutUsuario
    static async logoutUsuario(req, res) {
        res.clearCookie('token');
        res.status(200).json({ message: 'Usuario desconectado.' });
    }

    //Method to reset password
    static async resetPassword(req, res) {
        const { correo } = req.body;
        console.log(correo);
        if (!correo) {
            res.status(400).json({ error: 'Correo requerido' });
            return;
        }
        try {
            const usuario = await UsuarioDAO.getById(correo);
            if (usuario.length === 0) {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return;
            }
            const token = jwt.sign({ correo: usuario[0].correo }, 'Proyecto-DS', { expiresIn: 60 * 15 });
            //send email with token
            await emailSender.sendEmailRestorePassword(usuario[0].correo, token);
            res.status(200).json({ message: 'Token enviado al correo' ,token: token});
        } catch (error) {
            res.status(500).json({ error: 'Error al resetear la contraseña' });
        }
    }
    //Method to reset password token
        static async resetPasswordToken(req, res) {
            const {token, contrasenna} = req.body;
            if (!token || !contrasenna) {
                res.status(400).json({ error: 'Token y contraseña requeridos' });
                return;
            }
            try {
                const decoded = jwt.verify(token, 'Proyecto-DS');
                const usuario = await UsuarioDAO.getById(decoded.correo);
                if (usuario.length === 0) {
                    res.status(404).json({ error: 'Usuario no encontrado' });
                    return;
                }
                //Actualizar contraseña IMPLEMENTAR HASH EN FUTURO
                usuario[0].contrasenna = contrasenna;
                await UsuarioDAO.update(usuario[0]);
                res.status(200).json({ message: 'Contraseña actualizada' });

            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al resetear la contraseña' });
            }
        }

    //Method to reset password for student
    /**
     * En el req.params se espera el correo del estudiante
     * En el req.body se espera la nueva contraseña
     * ejemplo de como lo recibe el body:
     * {
     * "contrasenna":"nuevaContraseña"
     * }
     */
    static async resetPasswordEstudiante(req, res) {
        const { id } = req.params;
        const { contrasenna } = req.body;
        if (!contrasenna) {
            res.status(400).json({ error: 'Contraseña requerida' });
            return;
        }
        try {
            const usuario = await UsuarioDAO.getById(id);
            if (usuario.length === 0) {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return;
            }
            //Actualizar contraseña IMPLEMENTAR HASH EN FUTURO
            usuario[0].contrasenna = contrasenna;
            await UsuarioDAO.update(usuario[0]);
            res.status(200).json({ message: 'Contraseña actualizada' });
        } catch (error) {
            res.status(500).json({ error: 'Error al resetear la contraseña' });
        }
    }

}
module.exports = UsuarioController;