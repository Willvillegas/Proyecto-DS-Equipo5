const {ConnectionDAO} = require('./ConnectionDAO');

class NotificacionDAO {
    static async getAll(idEstudiante, fecha) {
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            console.log("Id estudiante:", idEstudiante, "Fecha:", fecha);
            const result = await connection.executeProcedures("BuscarNotificacion", {
                idEstudianteUsuario: idEstudiante,
                fecha: fecha,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting notificaciones: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    //method to delete an notificacion by notification id and estudianteUsuario id from the database
    static async delete(idNotificacion) {
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarNotificacion", {
                id: idNotificacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error deleting notificacion: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    //method to mark an notificacion as read by notification id from the database
    static async markAsRead(idNotificacion) {
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("MarcarNotificacion", {
                id: idNotificacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error marking notificacion as read: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
}

module.exports = NotificacionDAO;