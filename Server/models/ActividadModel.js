const { ActividadDAO } = require('../DAOs/ActividadDAO');

class ActividadModel {
  constructor(id, semana, nombre, fechaHora, listaProfesores, diasPublicar, diasRecordar, invitadosEspeciales, ubicacion, estado, comentario, nombreAfiche) {
    this.id = id;
    this.semana = semana;
    this.nombre = nombre;
    this.fechaHora = fechaHora;
    this.listaProfesores = listaProfesores;
    this.diasPublicar = diasPublicar;
    this.diasRecordar = diasRecordar;
    this.invitadosEspeciales = invitadosEspeciales;
    this.ubicacion = ubicacion;
    this.estado = estado;
    this.comentario = comentario;
    this.nombreAfiche = nombreAfiche;
  }

  // Métodos estáticos para interactuar con la base de datos a través del DAO
  static async getAll() {
    try {
      const actividades = await ActividadDAO.getAll();
      return actividades;
    } catch (error) {
      throw new Error('Error al obtener todas las actividades');
    }
  }

  static async getById(id) {
    try {
      const actividad = await ActividadDAO.getById(id);
      return actividad;
    } catch (error) {
      throw new Error('Error al obtener la actividad por su ID');
    }
  }

  async create() {
    try {
      await ActividadDAO.create(this);
    } catch (error) {
      throw new Error('Error al crear la actividad');
    }
  }

  async update() {
    try {
      await ActividadDAO.update(this);
    } catch (error) {
      throw new Error('Error al actualizar la actividad');
    }
  }

  async delete() {
    try {
      await ActividadDAO.delete(this.id);
    } catch (error) {
      throw new Error('Error al eliminar la actividad');
    }
  }
}

module.exports = ActividadModel;
