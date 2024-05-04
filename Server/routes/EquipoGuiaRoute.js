const express = require('express');
const router = express.Router();
const EquipoGuiaController = require('../controllers/EquipoGuiaController');

//Rutas
router.get('/', EquipoGuiaController.getAll);
router.get('/:id', EquipoGuiaController.getById);
router.post('/', EquipoGuiaController.create);
router.put('/:id', EquipoGuiaController.update);
router.delete('/:id', EquipoGuiaController.delete);

//Rutas profesores en equipos guía
router.get('/:id/profesores', EquipoGuiaController.getAllProfesor);
router.post('/:id/profesores/:idProfesor', EquipoGuiaController.createTeamProfesor);
router.delete('/:id/profesores/:idProfesor', EquipoGuiaController.deleteTeamProfesor);

//Rutas asistentes en equipos guía
router.get('/:id/asistentes', EquipoGuiaController.getAllAsistente);
router.post('/:id/asistentes/:idAsistente', EquipoGuiaController.createTeamAsistente);
router.delete('/:id/asistentes/:idAsistente', EquipoGuiaController.deleteTeamAsistente);

module.exports = router;
