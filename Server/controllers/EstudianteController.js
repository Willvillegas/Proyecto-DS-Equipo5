const EstudianteDAO = require('../DAOs/EstudianteDAO');
const EstudianteModel = require('../models/EstudianteModel');

class EstudianteController {
    static async getAllEstudiantes(req, res) {
        try {
            const estudiantes = await EstudianteDAO.getAll();
            res.status(200).json(estudiantes);
        } catch (error) {
            res.status(500).json({ error: 'Error getting estudiantes' });
        }
    }

    static async getEstudianteById(req, res) {
        const id = req.params.id;
        try {
            const estudiante = await EstudianteDAO.getById(id);
            res.status(200).json(estudiante);
        } catch (error) {
            res.status(500).json({ error: 'Error getting estudiante by id' });
        }
    }

    static async createEstudiante(req, res) {
        const { nombre, apellido, correo } = req.body;
        const estudiante = new EstudianteModel(nombre, apellido, correo);
        try {
            const result = await EstudianteDAO.create(estudiante);
            res.status(201).json({ message: 'Estudiante created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating estudiante' });
        }
    }

    static async updateEstudiante(req, res) {
        const id = req.params.id;
        const { nombre, apellido, correo } = req.body;
        const estudiante = new EstudianteModel(nombre, apellido, correo, id);
        try {
            const result = await EstudianteDAO.update(estudiante);
            res.status(200).json({ message: 'Estudiante updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating estudiante' });
        }
    }

    static async deleteEstudiante(req, res) {
        const id = req.params.id;
        try {
            const result = await EstudianteDAO.delete(id);
            res.status(200).json({ message: 'Estudiante deleted successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting estudiante' });
        }
    }
}

module.exports = EstudianteController;
