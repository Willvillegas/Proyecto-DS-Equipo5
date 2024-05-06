class ActividadModel {
  constructor(id, semana, fecha, previos, publicacion, recordatorios, enlace, afiche, tipo, modalidad, estado, idPlan, responsables) {
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
}

module.exports = { ActividadModel };