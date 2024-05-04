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
        const asistenteData = req.body;
        try {
            const newAsistente = new AsistenteModel(asistenteData.nombre, asistenteData.apellido, asistenteData.correo);
            const result = await AsistenteDAO.create(newAsistente);
            res.status(201).json(result);
        } catch (error) {
            console.log('Error creating asistente: ', error);
            res.status(500).json({ error: 'Error al crear un nuevo asistente.' });
        }
    }

    static async updateAsistente(req, res) {
        const asistenteData = req.body;
        try {
            const updatedAsistente = new AsistenteModel(asistenteData.nombre, asistenteData.apellido, asistenteData.correo);
            updatedAsistente.id = asistenteData.id;
            const result = await AsistenteDAO.update(updatedAsistente);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error updating asistente: ', error);
            res.status(500).json({ error: 'Error al actualizar el asistente.' });
        }
    }
}

module.exports = AsistenteController;
