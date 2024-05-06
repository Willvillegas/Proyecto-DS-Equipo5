const express = require('express');
const router = express.Router();
const EquipoGuiaController = require('../controllers/EquipoGuiaController');

// Rutas
router.get('/', EquipoGuiaController.getAllEquipoGuia);
router.get('/:id', EquipoGuiaController.getEquipoGuiaById);
router.post('/', EquipoGuiaController.createEquipoGuia);
router.put('/:id', EquipoGuiaController.updateEquipoGuia);
router.delete('/:id', EquipoGuiaController.deleteEquipoGuia);

// Rutas profesores en equipos guía
router.get('/:id/profesores', EquipoGuiaController.getAllProfesorEquipoGuia);
router.post('/:id/profesores/:idProfesor', EquipoGuiaController.createTeamProfesorEquipoGuia);
router.delete('/:id/profesores/:idProfesor', EquipoGuiaController.deleteTeamProfesorEquipoGuia);

// Rutas asistentes en equipos guía
router.get('/:id/asistentes', EquipoGuiaController.getAllAsistenteEquipoGuia);
router.post('/:id/asistentes/:idAsistente', EquipoGuiaController.createTeamAsistenteEquipoGuia);
router.delete('/:id/asistentes/:idAsistente', EquipoGuiaController.deleteTeamAsistenteEquipoGuia);

module.exports = router;
