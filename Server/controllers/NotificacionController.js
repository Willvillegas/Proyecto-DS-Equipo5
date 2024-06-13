const NotificacionDAO = require('../DAOs/NotificacionDAO');
//const NotificacionModel = require('../models/NotificacionModel');

class NotificacionController {
    static async getAllNotificacion(req, res) {
        const { idEstudiante } = req.params;
        try {
            if (!idEstudiante) {
                res.status(400).json({ error: 'idEstudiante is required' });
            }

            const notificaciones = await NotificacionDAO.getAll(idEstudiante);

            if (notificaciones.length === 0) {
                res.status(404).json({ message: 'Notificaciones not found' });
            }
            res.status(200).json(notificaciones);
        } catch (error) {
            res.status(500).json({ error: 'Error getting notificaciones' });
        }
    }

    static async deleteNotificacion(req, res) {
        const { idNotificacion, idEstudianteUsuario } = req.params;
        try {
            if (!idNotificacion ?? !idEstudianteUsuario) {
                res.status(400).json({ error: 'idNotificacion and idEstudianteUsuario are required' });
            }
            const result = await NotificacionDAO.delete(idNotificacion, idEstudianteUsuario);
            res.status(200).json({ message: 'Notificacion deleted successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting notificacion' });
        }
    }

    static async markNotificacion(req, res) {
        const { idNotificacion } = req.params;
        try {
            if (!idNotificacion) {
                res.status(400).json({ error: 'idNotificacion is required' });
            }
            const result = await NotificacionDAO.markAsRead(idNotificacion);
            res.status(200).json({ message: 'Notificacion marked as read successfully', result });
        } catch (error) {
            res.status(500).json({ error: 'Error marking notificacion as read' });
        }
    }

}
module.exports = NotificacionController;
