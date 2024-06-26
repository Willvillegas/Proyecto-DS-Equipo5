const PublicarActividadVisitor = require('./PublicarActividadVisitor');
const RecordatorioActividadVisitor = require('./RecordatorioActividadVisitor');
const { ActividadDAO } = require('../DAOs/ActividadDAO');
const { calcularFechasRecordatorio } = require('../utils/helpers.js');
class ActividadModel {
    static observer = [];
    constructor(id, semana, fecha, previos, publicacion, recordatorios, enlace, afiche, tipo, modalidad, estado, idPlan, responsables, nombre) {
        this.id = id;
        this.semana = semana;
        this.fecha = fecha;
        this.previos = previos;
        this.publicacion = publicacion;
        this.recordatorios = recordatorios;
        this.enlace = enlace;
        this.afiche = afiche;
        this.tipo = tipo;
        this.modalidad = modalidad;
        this.estado = estado;
        this.idPlan = idPlan;
        this.responsables = responsables;
        this.nombre = nombre;
    }

    getSemana() {
        return this.semana;
    }

    setSemana(semana) {
        this.semana = semana;
    }

    getFecha() {
        return this.fecha;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    getPrevios() {
        return this.previos;
    }

    setPrevios(previos) {
        this.previos = previos;
    }

    getPublicacion() {
        return this.publicacion;
    }

    setPublicacion(publicacion) {
        this.publicacion = publicacion;
    }

    getRecordatorios() {
        return this.recordatorios;
    }

    setRecordatorios(recordatorios) {
        this.recordatorios = recordatorios;
    }

    getEnlace() {
        return this.enlace;
    }

    setEnlace(enlace) {
        this.enlace = enlace;
    }

    getAfiche() {
        return this.afiche;
    }

    setAfiche(afiche) {
        this.afiche = afiche;
    }

    getResponsables() {
        return this.responsables;
    }

    setResponsables(responsables) {
        this.responsables = responsables;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getModalidad() {
        return this.modalidad;
    }

    setModalidad(modalidad) {
        this.modalidad = modalidad;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    getIdPlan() {
        return this.idPlan;
    }

    setIdPlan(idPlan) {
        this.idPlan = idPlan;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    /**
     * Fase 3
     *  Definir un método estático que se comporte como un elemento del patrón Visitor
     */
    // Patrón visitor
    static accept(visitor, actividad, fecha = null, fechaRecordatorio = null) {
        return visitor.visit(actividad, fecha, fechaRecordatorio);
    }
    // Patrón observer
    static addObserver(p_observer) {
        if (!ActividadModel.observer.includes(p_observer)) {
            ActividadModel.observer.push(p_observer);
        }
    }
    static removeObserver(p_observer) {
        ActividadModel.observer = ActividadModel.observer.filter(observer => observer !== p_observer);
    }

    static notifyObservers(actividad) {
        ActividadModel.observer.forEach(observerSuscribe => {
            observerSuscribe.update(actividad);
        });
    }
    static async revisarActividades(fechaSistema) {
        const fecha_Sistema = new Date(fechaSistema);
        const actividades = await ActividadDAO.getAll("0");
        const notificaiones = await ActividadDAO.tomarNotificaciones(fecha_Sistema)
        //console.log("Revisando actividades: ", fechaSistema,);
        
        let notificacionesActividad = []
        actividades.forEach(actividad => {
            let cantidad = 0;
            let notificacionCreada = false;
            
            /**
             * Si el estado de la actividad es "Planeada" y actividad.fecha es menor o igual a la fecha del sistema
            */
            console.log("Actividad: ", actividad);
            let fecha = new Date(actividad.fechaPublicacion);
            console.log("Fecha de la actividad: ", fecha, "Fecha del sistema: ", fecha_Sistema);
            notificaiones.forEach(notificacion =>{
                if (notificacion.idActividad == actividad.id){
                    console.log(Date(notificacion.fechaRecordatorio), Date(fecha_Sistema))
                    if (notificacion.fechaRecordatorio == fecha_Sistema){
                        notificacionCreada = true
                    }
                    if (notificacion.fechaRecordatorio != null) {
                        cantidad++
                    }
                }
            })
            console.log(cantidad, notificacionCreada)
            if (actividad.estado === "Planeada" && fecha <= fecha_Sistema && cantidad<actividad.recordatorios && !notificacionCreada) {
                //cuando hago acept en el visitor, se cambia el estado de la actividad a "Notificada"
                let notificacion = ActividadModel.accept(PublicarActividadVisitor, actividad, fecha_Sistema);
                notificacionesActividad.push(notificacion);
            }
            /**
             * Si el estado de la actividad es "Notificada"
            */
            if (actividad.estado === "Notificada" && cantidad<actividad.recordatorios && !notificacionCreada) {
                //Calcular fecha de recordatorio
                const vfechaRecordatorio = calcularFechasRecordatorio(actividad.fecha, actividad.recordatorios, fecha_Sistema);
                console.log(`Fechas de recordatorio para :${actividad.nombre}  `, vfechaRecordatorio);
                if (vfechaRecordatorio.some(fecha => new Date(fecha) <= fechaSistema)) {
                    //cuando hago acept en el visitor, se generan los recordatorios de la actividad
                    vfechaRecordatorio.forEach(fecha2 => {
                            console.log(Date(fecha2), Date(fecha_Sistema))
                                let notificacionRecordatorio = ActividadModel.accept(RecordatorioActividadVisitor, actividad, fecha_Sistema, fecha2);
                                notificacionesActividad.push(notificacionRecordatorio);
                    });
                }
            }
        });
        //console.log(notificacionesActividad)
        ActividadModel.notifyObservers(notificacionesActividad);
    }
}

module.exports = ActividadModel;