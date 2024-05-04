const ProfesorDAO = require('../DAOs/ProfesorDAO');

class ProfesorController {
    static async getAllProfesores(req, res) {
        try {
            const profesores = await ProfesorDAO.getAll();
            res.status(200).json(profesores);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener todos los profesores.' });
        }
    }

    static async getProfesorById(req, res) {
        const { id } = req.params;
        try {
            const profesor = await ProfesorDAO.getById(id);
            res.status(200).json(profesor);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el profesor por ID.' });
        }
    }

    static async createProfesor(req, res) {
        const profesorData = req.body;
        try {
            const result = await ProfesorDAO.create(profesorData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear un nuevo profesor.' });
        }
    }

    static async updateProfesor(req, res) {
        const { id } = req.params;
        const profesorData = req.body;
        try {
            const result = await ProfesorDAO.update(profesorData, id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el profesor.' });
        }
    }

    static async deleteProfesor(req, res) {
        const { id } = req.params;
        try {
            const result = await ProfesorDAO.delete(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el profesor.' });
        }
    }

    static async changeProfesorRol(req, res) {
        const { id } = req.params;
        const { rol } = req.body;
        try {
            const result = await ProfesorDAO.changeRol(rol, id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al cambiar el rol del profesor.' });
        }
    }
}

module.exports = ProfesorController;
