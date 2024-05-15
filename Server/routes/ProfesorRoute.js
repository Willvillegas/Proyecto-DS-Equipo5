const express = require('express');
const router = express.Router();
const ProfesorController = require('../controllers/ProfesorController');

//Rutas
router.get('/profesores', ProfesorController.getAllProfesores);
router.get('/profesores/:id', ProfesorController.getProfesorById);
router.post('/profesores', ProfesorController.createProfesor);
router.put('/profesores/:id', ProfesorController.updateProfesor);
router.delete('/profesores/:id', ProfesorController.deleteProfesor);
router.put('/profesores/rol', ProfesorController.changeProfesorRol);

module.exports = router;
