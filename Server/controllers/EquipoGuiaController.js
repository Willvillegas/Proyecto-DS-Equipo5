const EquipoGuiaDAO = require('../DAOs/EquipoGuiaDAO');

class EquipoGuiaController {
    static async getAll(req, res, next) {
        try {
            const equiposGuia = await EquipoGuiaDAO.getAll();
            res.status(200).json(equiposGuia);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        const { id } = req.params;
        try {
            const equipoGuia = await EquipoGuiaDAO.getById(id);
            res.status(200).json(equipoGuia);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        const equipoGuiaData = req.body;
        try {
            const result = await EquipoGuiaDAO.create(equipoGuiaData);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        const { id } = req.params;
        const equipoGuiaData = req.body;
        try {
            const result = await EquipoGuiaDAO.update(id, equipoGuiaData);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params;
        try {
            const result = await EquipoGuiaDAO.delete(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getAllProfesor(req, res, next) {
        const { id } = req.params;
        try {
            const profesores = await EquipoGuiaDAO.getAllProfesor(id);
            res.status(200).json(profesores);
        } catch (error) {
            next(error);
        }
    }

    static async createTeamProfesor(req, res, next) {
        const { id, idProfesor } = req.params;
        try {
            const result = await EquipoGuiaDAO.createTeamProfesor(id, idProfesor);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async deleteTeamProfesor(req, res, next) {
        const { id, idProfesor } = req.params;
        try {
            const result = await EquipoGuiaDAO.deleteTeamProfesor(id, idProfesor);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getAllAsistente(req, res, next) {
        const { id } = req.params;
        try {
            const asistentes = await EquipoGuiaDAO.getAllAsistente(id);
            res.status(200).json(asistentes);
        } catch (error) {
            next(error);
        }
    }

    static async createTeamAsistente(req, res, next) {
        const { id, idAsistente } = req.params;
        try {
            const result = await EquipoGuiaDAO.createTeamAsistente(id, idAsistente);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async deleteTeamAsistente(req, res, next) {
        const { id, idAsistente } = req.params;
        try {
            const result = await EquipoGuiaDAO.deleteTeamAsistente(id, idAsistente);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = EquipoGuiaController;
