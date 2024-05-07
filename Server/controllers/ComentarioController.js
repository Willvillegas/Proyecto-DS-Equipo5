const ComentarioDAO = require('../DAOs/ComentarioDAO');
const ComentarioModel = require('../models/ComentarioModel');

class ComentarioController {
    static async getAllComentarios(req, res) {
        try {
            const comentarios = await ComentarioDAO.getAll();
            res.status(200).json(comentarios);
        } catch (error) {
            res.status(500).json({ error: 'Error getting comentarios' });
        }
    }

    static async getComentarioById(req, res) {
        const id = req.params.id;
        try {
            const comentario = await ComentarioDAO.getById(id);
            res.status(200).json(comentario);
        } catch (error) {
            res.status(500).json({ error: 'Error getting comentario by id' });
        }
    }

    static async createComentario(req, res) {
        const { titulo, fecha, cuerpo, profesor, actividad } = req.body;
        const comentario = new ComentarioModel(null, titulo, fecha, cuerpo, profesor, actividad);
        try {
            const result = await ComentarioDAO.create(comentario);
            res.status(201).json({ message: 'Comentario created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating comentario' });
        }
    }

    static async updateComentario(req, res) {
        const id = req.params.id;
        const { titulo, fecha, cuerpo, profesor, actividad } = req.body;
        const comentario = new ComentarioModel(id, titulo, fecha, cuerpo, profesor, actividad);
        try {
            const result = await ComentarioDAO.update(comentario);
            res.status(200).json({ message: 'Comentario updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating comentario' });
        }
    }

    static async deleteComentario(req, res) {
        const id = req.params.id;
        try {
            const result = await ComentarioDAO.delete(id);
            res.status(200).json({ message: 'Comentario deleted successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting comentario' });
        }
    }
}

module.exports = ComentarioController;
