const PlanTrabajoDAO = require('../DAOs/PlanTrabajoDAO');
const PlanTrabajoModel = require('../models/PlanTrabajoModel');

class PlanTrabajoController {
    static async getAllPlanesTrabajo(req, res) {
        try {
            const planesTrabajo = await PlanTrabajoDAO.getAll();
            res.status(200).json(planesTrabajo);
        } catch (error) {
            res.status(500).json({ error: 'Error getting planes de trabajo' });
        }
    }

    static async getPlanTrabajoById(req, res) {
        const id = req.params.id;
        try {
            const planTrabajo = await PlanTrabajoDAO.getById(id);
            res.status(200).json(planTrabajo);
        } catch (error) {
            res.status(500).json({ error: 'Error getting plan de trabajo by id' });
        }
    }

    static async createPlanTrabajo(req, res) {
        const { nombre, estado, equipo } = req.body;
        const planTrabajo = new PlanTrabajoModel(null, nombre, estado, equipo);
        try {
            const result = await PlanTrabajoDAO.create(equipo, planTrabajo);
            res.status(201).json({ message: 'Plan de trabajo created successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error creating plan de trabajo' });
        }
    }

    static async updatePlanTrabajo(req, res) {
        const id = req.params.id;
        const { nombre, estado, equipo } = req.body;
        const planTrabajo = new PlanTrabajoModel(id, nombre, estado, equipo);
        try {
            const result = await PlanTrabajoDAO.update(planTrabajo);
            res.status(200).json({ message: 'Plan de trabajo updated successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error updating plan de trabajo' });
        }
    }

    static async deletePlanTrabajo(req, res) {
        const id = req.params.id;
        console.log(req.params)
        try {
            const result = await PlanTrabajoDAO.delete(id);
            res.status(200).json({ message: 'Plan de trabajo deleted successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting plan de trabajo' });
        }
    }
}

module.exports = PlanTrabajoController;
