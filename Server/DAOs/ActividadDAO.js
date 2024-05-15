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
    static async getAll(id){
        const connection =  await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarActividades", {
                idPlan: id, //Id del plan
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error getting actividades: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    //method to get an actividad by id from the database
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarActividadId", {
                id: id, //Id de la actividad
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //method to create an actividad in the database
    static async create(actividad){
        const connection = ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearActividad", {
                semana: actividad.semana,
                fecha: actividad.fecha,
                previos: actividad.previos,
                publicacion: actividad.publicacion,
                recordatorios: actividad.recordatorios,
                enlace: actividad.enlace,
                afiche: actividad.afiche,
                responsables: actividad.responsables,
                tipo: actividad.tipo,
                modalidad: actividad.modalidad,
                idPlan: actividad.idPlan,
                nombre: actividad.nombre,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error creating actividad: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //method to update an actividad in the database
    static async update(actividad){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const aficheBuffer = Buffer.from(actividad.afiche, 'utf-8');
            const result = await connection.executeProcedures("ModificarActividad", {
                id: actividad.id,
                semana: actividad.semana,
                fecha: actividad.fecha,
                previos: actividad.previos,
                publicacion: actividad.publicacion,
                recordatorios: actividad.recordatorios,
                enlace: actividad.enlace,
                afiche: aficheBuffer,
                responsables: actividad.responsables,
                tipo: actividad.tipo,
                modalidad: actividad.modalidad,
                nombre: actividad.nombre,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            
            return result;
        } catch (error) {
            console.log('Error updating actividad: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    /**
     * Delete method (tobe a define in the future)
     */
    static async delete(id, observacion){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarActividad", {
                id: id, //Id de la actividad
                observacion: observacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async finish(id, datos){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("FinalizarActividad", {
                id: id, //Id de la actividad
                dato: datos,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
}
module.exports = {ActividadDAO};