const { AsistenteDAO } = require('../DAOs/AsistenteDAO');
const AsistenteModel = require('../models/AsistenteModel');

class AsistenteController {
    static async getAllAsistentes(req, res) {
        try {
            const asistentes = await AsistenteDAO.getAll();
            res.status(200).json(asistentes);
        } catch (error) {
            console.log('Error getting all asistentes: ', error);
            res.status(500).json({ error: 'Error al obtener todos los asistentes.' });
        }
    }

    static async getAsistenteById(req, res) {
        const { id } = req.params;
        try {
            const asistente = await AsistenteDAO.getById(id);
            res.status(200).json(asistente);
        } catch (error) {
            console.log('Error getting asistente by id: ', error);
            res.status(500).json({ error: 'Error al obtener el asistente por ID.' });
        }
    }

    static async createAsistente(req, res) {
        const { nombre, apellido, sede } = req.body;
        const asistente = new AsistenteModel(null, nombre, apellido, sede);
        try {
            const result = await AsistenteDAO.create(asistente);
            res.status(201).json({ message: 'Asistente created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating asistente' });
        }
    }

    static async updateAsistente(req, res) {
        const id = req.params.id;
        const { nombre, apellido, sede } = req.body;
        const asistente = new AsistenteModel(id, nombre, apellido, sede);
        try {
            const result = await AsistenteDAO.update(asistente);
            res.status(200).json({ message: 'Asistente updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating asistente' });
        }
    }
}

module.exports = AsistenteController;
