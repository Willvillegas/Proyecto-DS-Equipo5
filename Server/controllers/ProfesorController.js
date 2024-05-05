const modelProfesor = require('../models/ProfesorModel.js');
class ProfesorController {
    static async getAll(req, res) {
        try {
            const profesores = await modelProfesor.getAll();
            res.status(200).json(profesores);
        } catch (error) {
            console.log('Error getting profesores: ', error);
            res.status(500).json({ error: 'Error getting profesores' });
        }
    }
    static async getById(req, res) {
        try {
            const profesor = await modelProfesor.getById(req.params.id);
            if (profesor) {
                res.status(200).json(profesor);
            } else {
                res.status(404).json({ error: 'Profesor not found' });
            }
        } catch (error) {
            console.log('Error getting profesor by id: ', error);
            res.status(500).json({ error: 'Error getting profesor by id' });
        }
    }
}
module.exports = ProfesorController;