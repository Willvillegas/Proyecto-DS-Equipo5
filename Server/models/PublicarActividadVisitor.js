const IVisitor = require('./interfaces/IVisitor.js');
const { ActividadDAO } = require('../DAOs/ActividadDAO');
const ActividadModel = require('./ActividadModel.js');
/**
 * Fase 3:
 * definición de la clase PublicarActividadVisitor que implementa el patrón Visitor
 * esta clase se encarga de publicar una actividad
 */
class PublicarActividadVisitor extends IVisitor {
    static async visit(actividad, fecha, fechaRecordatorio) {
        /**
         * Primero, se cambia el estado de la actividad a "Publicada"
         * Luego, se llama a una SP que se encarga de publicar la actividad
         */
        actividad.estado = "Notificada";
        //const actividade = new ActividadModel(actividad.id,actividad.semana,actividad.fecha,actividad.previos,actividad.fechaPublicacion,actividad.recordatorios,actividad.enlace,null,actividad.tipo,actividad.modalidad,actividad.estado,actividad.idPlan,actividad.responsables,actividad.nombre);
        //await ActividadDAO.update(actividade);
        await ActividadDAO.post(actividad, actividad.fechaPublicacion);

        console.log(`Actividad ${actividad.nombre}publicada`);
    }
}
module.exports = PublicarActividadVisitor;