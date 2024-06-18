const IVisitor = require('./interfaces/IVisitor.js');
const { ActividadDAO } = require('../DAOs/ActividadDAO');
/**
 * Fase 3:
 * definición de la clase RecordatorioActividadVisitor que implementa el patrón Visitor
 * esta clase se encarga de generar los recordatorios de una actividad
 */
class RecordatorioActividadVisitor extends IVisitor{
    static async visit(actividad,fecha,fechaRecordatorio) {
        /**
         * Se llama a una SP que se encarga de generar los recordatorios de la actividad
        */
        await ActividadDAO.reminder(actividad,fecha,fechaRecordatorio);
        console.log(`Recordatorios de la actividad ${actividad.nombre} generados`);        
    }
}
module.exports = RecordatorioActividadVisitor;