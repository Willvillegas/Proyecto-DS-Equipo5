const IVisitor = require('./interfaces/IVisitor.js');
const { ActividadDAO } = require('../DAOs/ActividadDAO');
/**
 * Fase 3:
 * definición de la clase PublicarActividadVisitor que implementa el patrón Visitor
 * esta clase se encarga de publicar una actividad
 */
class PublicarActividadVisitor  extends IVisitor{
    static async visit(actividad) {
        /**
         * Primero, se cambia el estado de la actividad a "Publicada"
         * Luego, se llama a una SP que se encarga de publicar la actividad
         */
        actividad.estado = "Notificada";
        //await ActividadDAO.update(actividad);
        // await ActividadDAO.post(actividad);

        console.log(`Actividad ${actividad.nombre}publicada`);        
    }
}
module.exports = PublicarActividadVisitor;