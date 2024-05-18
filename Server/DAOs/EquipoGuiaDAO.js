const {ConnectionDAO} = require('./ConnectionDAO');
/*
const {EquipoGuia} = require('../models/EquipoGuia.js');
*/
// class that represents the EquipoGuiaDAO
class EquipoGuiaDAO{

    //method to get all the equipos guia from the database
    static async getAll(){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEquipos", {
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)  
            return result;
        } catch (error) {
            console.log('Error getting equipos guia: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    //method to get an equipo guia by id from the database
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEquipoId", {
                id: id, // Id del equipo
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error getting equipo guia by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }

    //method to create an equipo guia in the database
    static async create(equipoGuia){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearEquipo", {
                generacion: equipoGuia.generacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error creating equipo guia: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }

    //method to update an equipo guia in the database
    static async update(id, equipoGuia){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarEquipo", {
                id: id, // Id del equipo
                generacion: equipoGuia.generacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error updating equipo guia: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect()
        }
    }

    //method to delete an equipo guia in the database
    static async delete(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarEquipo", {
                id: id, // Id del equipo
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error deleting equipo guia: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect()
        }
    }
    //method to get list of  profesores in equipo guia
    /**
     * This method gets all the profesores that are part of an equipo guia
     * @param {number} Id - the id of the equipo guia
     * @returns on success, it returns a list of profesores that are part of an equipo guia
     */
    static async getAllProfesor(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEquipoProfesores", {
                id: id, // Id del equipo
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }
    static async createTeamProfesor(id, idProfesor){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearEquipoProfesor", {
                id: id, // Id del equipo
                idProfesor, idProfesor,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }
    static async deleteTeamProfesor(id, idProfesor){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarEquipoProfesor", {
                id: id, // Id del equipo
                idProfesor, idProfesor,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }

    //// No estan implementados ////

    /**
     * This method gets all asistente that is part of an equipo guia
     * @param {number} Id - the Id of the equipo guia
     * @returns on success, it returns a list of asistentes that are part of an equipo guia
     */
    static async getAllAsistente(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEquipoAsistentes", {
                id: id, // Id del equipo
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error getting asistentes: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }
    /**
     * This method gets all the Actividades that are part of an equipo guia
     * @param {number} Id - the Id of the equipo guia
     * @returns on success, it returns a list of Actividades that are part of an equipo guia
     * tobe......
     */
    static async createTeamAsistente(id, idAsistente){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearEquipoAsistente", {
                id: id, // Id del equipo
                idAsistente, idAsistente,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }
    static async deleteTeamAsistente(id, idAsistente){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarEquipoAsistente", {
                id: id, // Id del equipo
                idAsistente, idAsistente,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect()
        }
    }
}
module.exports = EquipoGuiaDAO;