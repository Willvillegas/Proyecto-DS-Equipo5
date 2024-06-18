const {ConnectionDAO}   = require('./ConnectionDAO');

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
            //console.log(result)
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
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const fecha = new Date(actividad.fecha);
            const publicacion = new Date(actividad.publicacion);
            const aficheBuffer = Buffer.from(actividad.afiche, 'base64');
            //console.log("By DAO: "+aficheBuffer);
            const result = await connection.executeProcedures("CrearActividad", {
                semana: actividad.semana,
                fecha: fecha,
                previos: actividad.previos,
                publicacion: publicacion,
                recordatorios: actividad.recordatorios,
                enlace: actividad.enlace,
                afiche: aficheBuffer,
                responsables: actividad.responsables,
                tipo: actividad.tipo,
                modalidad: actividad.modalidad,
                idPlan: actividad.idPlan,
                nombre: actividad.nombre,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            //console.log(result)
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
            //const aficheBuffer = Buffer.from(actividad.afiche, 'utf-8');
            const result = await connection.executeProcedures("ModificarActividad", {
                id: actividad.id,
                semana: actividad.semana,
                fecha: actividad.fecha,
                previos: actividad.previos,
                publicacion: actividad.publicacion,
                recordatorios: actividad.recordatorios,
                enlace: actividad.enlace,
                //afiche: aficheBuffer,
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
    static async delete(id, observacion){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarActividad", {
                id: id, //Id de la actividad
                observacion: observacion,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            //console.log(result)
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
            const datosBuffer = Buffer.from(datos, 'utf-8');
            const result = await connection.executeProcedures("FinalizarActividad", {
                id: id, //Id de la actividad
                dato: datosBuffer,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            //console.log(result)
            return result;
        } catch (error) {
            console.log('Error getting actividad by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    /**
     * Fase 3:
     * Definición de los métodos que se encargan de publicar y generar recordatorios de una actividad
     */
    static async post(actividad,fecha){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearNotificacion", {
                idActividad: actividad.id,
                creacion: fecha,
                emisor: actividad.responsables,
                contenido: 'Se ha publicado la actividad: '+actividad.nombre,
                recordatorio: null,
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
    static async reminder(actividad,fecha,fechaRecordatorio){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearNotificacion", {
                idActividad: actividad.id,
                creacion: fechaRecordatorio,
                emisor: actividad.responsables,
                contenido: 'Se ha generado un recordatorio de la actividad: '+actividad.nombre,
                recordatorio: fechaRecordatorio,
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
}
module.exports = {ActividadDAO};