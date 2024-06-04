const { ActividadDAO } = require('../DAOs/ActividadDAO');
const ActividadModel = require('../models/ActividadModel');

class ActividadController {
    static async getAllActividades(req, res) {
        try {
            const actividades = await ActividadDAO.getAll(req.params.id);
            //delete all afiche element of actividades.
            actividades.forEach(actividad => {
                delete actividad.afiche;
            });
            res.status(200).json(actividades);
        } catch (error) {
            console.log('Error getting actividades: ', error);
            res.status(500).json({ error: 'Error obteniendo actividades.' });
        }
    }

    static async getActividadById(req, res) {
        try {
            const actividad = await ActividadDAO.getById(req.params.id);
            delete actividad[0].afiche;
            res.status(200).json(actividad);
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            res.status(500).json({ error: 'Error obteniendo actividad por ID.' });
        }
    }

    static async getAficheActividadById(req, res) {
        try {
            const actividad = await ActividadDAO.getById(req.params.id);
            if (actividad.length === 0){
                return res.status(404).json({ error: 'No se encontró afiche para la actividad.' });
            }
            res.set('Content-Type', 'image/png');
            res.send(actividad[0].afiche);
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            res.status(500).json({ error: 'Error obteniendo actividad por ID.' });
        }
    }

    static async createActividad(req, res) {
        const { semana, fecha, previos, publicacion, recordatorios, enlace, afiche, tipo, modalidad, estado, idPlan, responsables, nombre } = req.body;
        
        const aficheBuffer = req.file.buffer;
        //console.log('By Controller: ', aficheBuffer);
        const actividad = new ActividadModel(null, semana, fecha, previos, publicacion, recordatorios, enlace, aficheBuffer, tipo, modalidad, estado, idPlan, responsables, nombre);
        try {
            const result = await ActividadDAO.create(actividad);
            res.status(201).json({ message: 'Actividad created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating actividad' });
        }
    }

    static async updateActividad(req, res) {
        const id = req.params.id;
        const { semana, fecha, previos, publicacion, recordatorios, enlace, tipo, modalidad, estado, idPlan, responsables, nombre } = req.body;
        
        const actividad = new ActividadModel(id, semana, fecha, previos, publicacion, recordatorios, enlace, null, tipo, modalidad, estado, idPlan, responsables, nombre);
        
        try {
            const result = await ActividadDAO.update(actividad);
            res.status(200).json({ message: 'Actividad updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating actividad' });
        }
    }


    static async deleteActividad(req, res) {
        const { id, observacion } = req.params;
        try {
            const result = await ActividadDAO.delete(id, observacion);
            res.status(200).json(result);
        } catch (error) {
            console.log('Error deleting actividad: ', error);
            res.status(500).json({ error: 'Error eliminando actividad.' });
        }
    }

    static async finishActividad(req, res) {
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
