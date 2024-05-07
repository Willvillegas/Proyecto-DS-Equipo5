/**TO DO: Implementar procedures**/

const { ConnectionDAO } = require('./ConnectionDAO');

class ComentarioDAO {
    static async getAll() {
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarComentarios");
            return result;
        } catch (error) {
            console.log('Error getting comentarios: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    static async getById(id) {
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
                titulo: comentario.titulo,
                fecha: comentario.fecha,
                cuerpo: comentario.cuerpo,
                profesor: comentario.profesor,
                actividad: comentario.actividad
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

    static async update(comentario) {
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

    static async delete(id) {
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
