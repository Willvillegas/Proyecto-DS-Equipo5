const ProfesorDAO = require('../DAOs/ProfesorDAO');

class ProfesorController {
    static async getAllProfesores(req, res) {
        try {
            const profesores = await ProfesorDAO.getAll();
            console.log("By Controller");
            console.log(profesores);
            res.status(200).send(profesores[0]);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error });
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
        const { codigo, nombre, apellidos, oficina, personal, sede, tipo } = req.body;
        const profesor = new ProfesorModel(null, codigo, nombre, apellidos, oficina, personal, sede, tipo);
        try {
            const result = await ProfesorDAO.create(profesor);
            res.status(201).json({ message: 'Profesor created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating profesor' });
        }
    }

    static async updateProfesor(req, res) {
        const id = req.params.id;
        const { codigo, nombre, apellidos, oficina, personal, sede, tipo } = req.body;
        const profesor = new ProfesorModel(id, codigo, nombre, apellidos, oficina, personal, sede, tipo);
        try {
            const result = await ProfesorDAO.update(profesor);
            res.status(200).json({ message: 'Profesor updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating profesor' });
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
