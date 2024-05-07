/**TO DO: Implementar procedures**/

const { ConnectionDAO } = require('./ConnectionDAO');

class ComentarioDAO {
    static async getAll(idActividad) {
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarComentarios", {
                idActividad: idActividad,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting comentarios: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    static async getAllRespuestas(idComentario){
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarRespuestas", {
                idMensaje: idComentario,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting respuestas: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    static async getById(id) { //No es necesario, no esta implementado en base
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarComentarioId", {
                id: id
            });
            return result;
        } catch (error) {
            console.log('Error getting comentario by id: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    static async create(comentario) {
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearComentario", {
                idProfesor: comentario.profesor,
	            idActividad: comentario.actividad,
	            idRespuesta: comentario.respuesta, // Si no hay respuesta se pasa 0
	            titulo: comentario.titulo,
	            cuerpo: comentario.cuerpo,
            });
            console.log(result);
            return result;
        } catch (error) {
            console.log('Error creating comentario: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    static async update(comentario) { //No es necesario, no esta implementado en base
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarComentario", {
                id: comentario.id,
                titulo: comentario.titulo,
                fecha: comentario.fecha,
                cuerpo: comentario.cuerpo,
                profesor: comentario.profesor,
                actividad: comentario.actividad
            });
            console.log(result);
            return result;
        } catch (error) {
            console.log('Error updating comentario: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    static async delete(id) { //No es necesario, no esta implementado en base
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarComentario", {
                id: id
            });
            return result;
        } catch (error) {
            console.log('Error deleting comentario: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
}

module.exports = ComentarioDAO;
