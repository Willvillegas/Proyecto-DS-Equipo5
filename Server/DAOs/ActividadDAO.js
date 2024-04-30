const {ConnectionDAO}   = require('./ConnectionDAO');
/**
 * const {Actividad} = require('../models/Actividad.js');
 */
/**
 * Consideratios for the ActividadDAO
 * the entity Actividad is a  (todo y parte) class with EquipoGuia and is important to take considetrations about the relationship between them
 * to follow the SOLID principles. tobe implemented in the future.....
 */

// class that represents the ActividadDAO
class ActividadDAO{
    //method to get all the actividades from the database
    static async getAll(){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*'SELECT * FROM Actividad'*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting actividades: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    //method to get an actividad by id from the database
    static async getById(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/* `SELECT * FROM Actividad WHERE id = ${id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to create an actividad in the database
    static async create(actividad){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/*`INSERT INTO Actividad VALUES ('${actividad.nombre}', '${actividad.descripcion}', '${actividad.fecha}', '${actividad.hora}', '${actividad.lugar}', '${actividad.cupo}', '${actividad.idGuia}')`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error creating actividad: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to update an actividad in the database
    static async update(actividad){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query =''/* `UPDATE Actividad SET nombre = '${actividad.nombre}', descripcion = '${actividad.descripcion}', fecha = '${actividad.fecha}', hora = '${actividad.hora}', lugar = '${actividad.lugar}', cupo = '${actividad.cupo}', idGuia = '${actividad.idGuia}' WHERE id = ${actividad.id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error updating actividad: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    /**
     * Delete method (tobe a define in the future)
     */
}
module.exports = {ActividadDAO};