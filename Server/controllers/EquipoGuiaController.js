const EquipoGuiaDAO = require('../DAOs/EquipoGuiaDAO');

class EquipoGuiaController {
    static async getAllEquipoGuia(req, res, next) {
        try {
            const equiposGuia = await EquipoGuiaDAO.getAll();
            res.status(200).json(equiposGuia);
        } catch (error) {
            next(error);
        }
    }

    static async getEquipoGuiaById(req, res, next) {
        const { id } = req.params;
        try {
            const equipoGuia = await EquipoGuiaDAO.getById(id);
            res.status(200).json(equipoGuia);
        } catch (error) {
            next(error);
        }
    }
    static async createEquipoGuia(req, res) {
        const { generacion, estado } = req.body;
        const equipoGuia = new EquipoGuiaModel(null, generacion, estado);
        try {
            const result = await EquipoGuiaDAO.create(equipoGuia);
            res.status(201).json({ message: 'Equipo guía created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating equipo guía' });
        }
    }

    static async updateEquipoGuia(req, res) {
        const id = req.params.id;
        const { generacion, estado } = req.body;
        const equipoGuia = new EquipoGuiaModel(id, generacion, estado);
        try {
            const result = await EquipoGuiaDAO.update(equipoGuia);
            res.status(200).json({ message: 'Equipo guía updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating equipo guía' });
        }
    }

    static async deleteEquipoGuia(req, res, next) {
        const { id } = req.params;
        try {
            const result = await EquipoGuiaDAO.delete(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getAllProfesorEquipoGuia(req, res, next) {
        const { id } = req.params;
        try {
            const profesores = await EquipoGuiaDAO.getAllProfesor(id);
            res.status(200).json(profesores);
        } catch (error) {
            next(error);
        }
    }

    static async createTeamProfesorEquipoGuia(req, res, next) {
        const { id, idProfesor } = req.params;
        try {
            const result = await EquipoGuiaDAO.createTeamProfesor(id, idProfesor);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async deleteTeamProfesorEquipoGuia(req, res, next) {
        const { id, idProfesor } = req.params;
        console.log(id)
        console.log("EQUIPOGUIA CONTROLLER:", idProfesor); 
        try {
            const result = await EquipoGuiaDAO.deleteTeamProfesor(id, idProfesor);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({error: 'No se pudo eliminar el profesor'});
        }
    }

    static async getAllAsistenteEquipoGuia(req, res, next) {
        const { id } = req.params;
        try {
            const asistentes = await EquipoGuiaDAO.getAllAsistente(id);
            res.status(200).json(asistentes);
        } catch (error) {
            next(error);
        }
    }

    static async createTeamAsistenteEquipoGuia(req, res, next) {
        const { id, idAsistente } = req.params;
        try {
            const result = await EquipoGuiaDAO.createTeamAsistente(id, idAsistente);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async deleteTeamAsistenteEquipoGuia(req, res, next) {
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
