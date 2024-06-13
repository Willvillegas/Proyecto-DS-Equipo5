const express = require('express');
const multer = require('multer');
const EstudianteController = require('../controllers/EstudianteController');
const NotificacionController = require('../controllers/NotificacionController');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//Rutas
router.get('/allEstudiantes/:id', EstudianteController.getAllEstudiantes);
router.get('/:id', EstudianteController.getEstudianteById);
router.post('/', EstudianteController.createEstudiante);
router.put('/update/:id', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);
//exportar un xlsx con los datos
router.post('/upload', upload.single('file'), EstudianteController.createEstudianteFromFile);
//importar un xlsx con los datos
router.post('/download', EstudianteController.createFileFromEstudiantes);

/**
 * Fase 3:
 * Ruta para obtener y actualizar la foto del estudiante
 */
router.get('/photo/:id', EstudianteController.getPhoto);
router.put('/photo/:id', upload.single('file'), EstudianteController.updatePhoto);

/**
 * Fase 3:
 * Rutas para obtener y realizar operaciones con las notificaciones de un estudiante
 */
router.get('/notificaciones/:idEstudiante', NotificacionController.getAllNotificacion);
router.delete('/notificaciones/:idNotificacion/:idEstudianteUsuario', NotificacionController.deleteNotificacion);
router.put('/notificaciones/:idNotificacion', NotificacionController.markNotificacion);

module.exports = router;
