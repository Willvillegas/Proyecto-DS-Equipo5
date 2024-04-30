const {ConnectionDAO} = require('./ConnectionDAO.js');
/*
const profesorModel = require('../models/Profesor.js');
*/
// class that represents the ProfesorDAO
class ProfesorDAO{

    static async getAll(){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/**'SELECT * FROM Profesor'*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    static async getById(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*`SELECT * FROM Profesor WHERE id = ${id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting profesor by id: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    static async create(profesor){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*`INSERT INTO Profesor VALUES ('${profesor.nombre}', '${profesor.apellido}', '${profesor.correo}')`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error creating profesor: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    static async update(profesor){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*`UPDATE Profesor SET nombre = '${profesor.nombre}', apellido = '${profesor.apellido}', correo = '${profesor.correo}' WHERE id = ${profesor.id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error updating profesor: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
}

module.exports = ProfesorDAO;
