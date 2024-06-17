const NotificacionDAO = require('../DAOs/NotificacionDAO');
//const NotificacionModel = require('../models/NotificacionModel');

class NotificacionController {
   static async getAllNotificacion(req, res) {
        const { idEstudiante } = req.params;
        const { fecha } = req.query;
        try {
            if (!idEstudiante) {
                return res.status(400).json({ error: 'idEstudiante is required' });
            }
            if (!fecha) {
                return res.status(400).json({ error: 'fecha is required' });
            }
            const notificaciones = await NotificacionDAO.getAll(idEstudiante, fecha);

            if (notificaciones.length === 0) {
                return res.status(404).json({ message: 'Notificaciones not found' });
            }
            res.status(200).json(notificaciones);
        } catch (error) {
            res.status(500).json({ error: 'Error getting notificaciones' });
        }
    }

    static async deleteNotificacion(req, res) {
        const { idNotificacion} = req.params;
        try {
            if (!idNotificacion) {
                res.status(400).json({ error: 'idNotificacion is required' });
            }
            const result = await NotificacionDAO.delete(idNotificacion);
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
