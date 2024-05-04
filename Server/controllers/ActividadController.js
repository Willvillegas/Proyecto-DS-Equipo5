const { ActividadDAO } = require('../DAOs/ActividadDAO');
const ActividadModel = require('../models/ActividadModel');

class ActividadController {
    static async getAll(req, res) {
        try {
            const actividades = await ActividadDAO.getAll(req.params.id);
            res.status(200).json(actividades);
        } catch (error) {
            console.log('Error getting actividades: ', error);
            res.status(500).json({ error: 'Error obteniendo actividades.' });
        }
    }

    static async getById(req, res) {
        try {
            const actividad = await ActividadDAO.getById(req.params.id);
            res.status(200).json(actividad);
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            res.status(500).json({ error: 'Error obteniendo actividad por ID.' });
        }
    }

    static async create(req, res) {
        const actividadData = req.body;
        try {
            const actividad = new ActividadModel(actividadData);
            const result = await ActividadDAO.create(actividad);
            res.status(201).json(result);
        } catch (error) {
            console.log('Error creating actividad: ', error);
            res.status(500).json({ error: 'Error creando actividad.' });
        }
    }

    static async update(req, res) {
        const actividadData = req.body;
        try {
            const actividad = new ActividadModel(actividadData);
            const result = await ActividadDAO.update(actividad);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error updating actividad: ', error);
            res.status(500).json({ error: 'Error actualizando actividad.' });
        }
    }

    static async delete(req, res) {
        const { id, observacion } = req.params;
        try {
            const result = await ActividadDAO.delete(id, observacion);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error deleting actividad: ', error);
            res.status(500).json({ error: 'Error eliminando actividad.' });
        }
    }

    static async finish(req, res) {
        const { id } = req.params;
        const datos = req.body;
        try {
            const result = await ActividadDAO.finish(id, datos);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error finishing actividad: ', error);
            res.status(500).json({ error: 'Error finalizando actividad.' });
        }
    }
}

module.exports = ActividadController;
