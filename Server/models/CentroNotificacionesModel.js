const { ActividadDAO } = require('../DAOs/ActividadDAO');

class CentroNotificacionesModel {
    static update(actividad) {
        //aqui se llama al DAO de Notificaciones 
        console.log(actividad,"Pruena")
        actividad.forEach(notification => {
            if (notification.recordatorio == null){
                ActividadDAO.post(notification)
            }else{
                ActividadDAO.reminder(notification)
            }
        });
    }   
}
module.exports = CentroNotificacionesModel;