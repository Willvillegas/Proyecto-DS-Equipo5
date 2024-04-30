const {ConnectionDAO} = require('./ConnectionDAO');
/*
const {Asistente} = require('../models/Asistente');
*/
// class that represents the AsistenteDAO
class AsistenteDAO{
    //method to get all the asistentes from the database
    static async getAll(){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*'SELECT * FROM Asistente'*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting asistentes: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    //method to get an asistente by id from the database
    static async getById(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = `SELECT * FROM Asistente WHERE id = ${id}`;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting asistente by id: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to create an asistente in the database
    static async create(asistente){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = `INSERT INTO Asistente VALUES ('${asistente.nombre}', '${asistente.apellido}', '${asistente.correo}')`;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error creating asistente: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to update an asistente in the database
    static async update(asistente){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = `UPDATE Asistente SET nombre = '${asistente.nombre}', apellido = '${asistente.apellido}', correo = '${asistente.correo}' WHERE id = ${asistente.id}`;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error updating asistente: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }

}
module.exports = AsistenteDAO;