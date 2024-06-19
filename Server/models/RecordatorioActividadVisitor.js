const IVisitor = require('./interfaces/IVisitor.js');
const { ActividadDAO } = require('../DAOs/ActividadDAO');
/**
 * Fase 3:
 * definición de la clase RecordatorioActividadVisitor que implementa el patrón Visitor
 * esta clase se encarga de generar los recordatorios de una actividad
 */
class RecordatorioActividadVisitor extends IVisitor{
    static visit(actividad,fecha,fechaRecordatorio) {
        /**
         * Se llama a una SP que se encarga de generar los recordatorios de la actividad
        */
        //await ActividadDAO.reminder(actividad,fecha,fechaRecordatorio);
        const fechaAcividad = new Date(actividad.fecha).toLocaleString()
        console.log(`Recordatorios de la actividad ${actividad.nombre} generados`);        
        let notificacion = {
            idActividad: actividad.id,
            creacion: fecha,
            emisor: actividad.responsables,
            contenido: 'Se ha generado un recordatorio de la actividad: '+actividad.nombre+", para la fecha de "+fechaAcividad.slice(0, 9)+".",
            recordatorio: fechaRecordatorio
        }
        return notificacion;
    }
}
module.exports = RecordatorioActividadVisitor;