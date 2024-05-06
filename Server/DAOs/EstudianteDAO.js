const {ConnectionDAO}   = require('./ConnectionDAO');
/**
 * const {Estudiante} = require('../models/Estudiante.js');
 */
// class that represents the EstudianteDAO
class EstudianteDAO{
    //method to get all the estudiantes from the database
    static async getAll(){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = 'SELECT * FROM Estudiante';
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting estudiantes: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    //method to get an estudiante by id from the database
    static async getById(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = `SELECT * FROM Estudiante WHERE id = ${id}`;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting estudiante by id: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to create an estudiante in the database
    static async create(estudiante){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/*`INSERT INTO Estudiante VALUES ('${estudiante.nombre}', '${estudiante.apellido}', '${estudiante.correo}')`*/;
            /*`INSERT INTO Estudiante VALUES ('${estudiante.carnet}', '${estudiante.nombre}', '${estudiante.apellido1}', '${estudiante.apellido2}', '${estudiante.correo}', '${estudiante.telefono}', '${estudiante.sede}', '${estudiante.estado}', '${estudiante.equipo}')`*/
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error creating estudiante: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to update an estudiante in the database
    static async update(estudiante){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/* `UPDATE Estudiante SET nombre = '${estudiante.nombre}', apellido = '${estudiante.apellido}', correo = '${estudiante.correo}' WHERE id = ${estudiante.id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error updating estudiante: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to delete an estudiante from the database
    static async delete(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/* `DELETE FROM Estudiante WHERE id = ${id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error deleting estudiante: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
}
module.exports = EstudianteDAO;
