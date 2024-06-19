class CentroNotificacionesModel {
    static async update(actividad) {
        //aqui se llama al DAO de Notificaciones 
        console.log(`Actividad ${actividad.contenido} ha sido actualizada`);
    }
}
module.exports = CentroNotificacionesModel;