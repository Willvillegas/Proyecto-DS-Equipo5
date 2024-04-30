const {ConnectionDAO} = require('./ConnectionDAO');
/*
const {EquipoGuia} = require('../models/EquipoGuia.js');
*/
// class that represents the EquipoGuiaDAO
class EquipoGuiaDAO{

    //method to get all the equipos guia from the database
    static async getAll(){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*'SELECT * FROM EquipoGuia'*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting equipos guia: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }

    //method to get an equipo guia by id from the database
    static async getById(id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*`SELECT * FROM EquipoGuia WHERE id = ${id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting equipo guia by id: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }

    //method to create an equipo guia in the database
    static async create(equipoGuia){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query ='' /*`INSERT INTO EquipoGuia VALUES ('${equipoGuia.nombre}', '${equipoGuia.apellido}', '${equipoGuia.correo}')`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error creating equipo guia: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }

    //method to update an equipo guia in the database
    static async update(equipoGuia){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*`UPDATE EquipoGuia SET nombre = '${equipoGuia.nombre}', apellido = '${equipoGuia.apellido}', correo = '${equipoGuia.correo}' WHERE id = ${equipoGuia.id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error updating equipo guia: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }

    //method to delete an equipo guia in the database
    static async delete(id){
        const connection = new Connection
        try {
            await connection.connect();
            const query = ''/*`DELETE FROM EquipoGuia WHERE id = ${id}`*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error deleting equipo guia: ', error);
            throw error;
        }finally{
            await connection.disconnect();
        }
    }
    //method to get list of  profesores in equipo guia
    /**
     * This method gets all the profesores that are part of an equipo guia
     * @param {number} Id - the id of the equipo guia
     * @returns on success, it returns a list of profesores that are part of an equipo guia
     */
    static async getAllProfesor(Id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*'SELECT * FROM Profesor'***involucra joins*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    /**
     * This method gets all asistente that is part of an equipo guia
     * @param {number} Id - the Id of the equipo guia
     * @returns on success, it returns a list of asistentes that are part of an equipo guia
     */
    static async getAllAsistente(Id){
        const connection = new ConnectionDAO();
        try {
            await connection.connect();
            const query = ''/*'SELECT * FROM Asistente'***involucra joins*/;
            const result = await connection.executeQuery(query);
            return result;
        } catch (error) {
            console.log('Error getting asistentes: ', error);
            throw error;
        } finally {
            await connection.disconnect();
        }
    }
    /**
     * This method gets all the Actividades that are part of an equipo guia
     * @param {number} Id - the Id of the equipo guia
     * @returns on success, it returns a list of Actividades that are part of an equipo guia
     * tobe......
     */
}
module.exports = EquipoGuiaDAO;