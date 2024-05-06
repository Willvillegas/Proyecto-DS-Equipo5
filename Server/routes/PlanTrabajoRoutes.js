const express = require('express');
const router = express.Router();
const PlanTrabajoController = require('../controllers/PlanTrabajoController');

//Rutas
router.get('/', PlanTrabajoController.getAllPlanesTrabajo);
router.get('/:id', PlanTrabajoController.getPlanTrabajoById);
router.post('/', PlanTrabajoController.createPlanTrabajo);
router.put('/:id', PlanTrabajoController.updatePlanTrabajo);
router.delete('/:id', PlanTrabajoController.deletePlanTrabajo);

module.exports = router;
