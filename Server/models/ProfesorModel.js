const ProfesorDAO = require('../DAOs/ProfesorDAO');

class ProfesorModel {
  constructor(codigoUnico, nombre, apellidos, numeroTelefonicoOficina, numeroTelefonicoCelular, rol, activo, sede) {
    this.codigoUnico = codigoUnico;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.numeroTelefonicoOficina = numeroTelefonicoOficina;
    this.numeroTelefonicoCelular = numeroTelefonicoCelular;
    this.rol = rol;
    this.activo = activo;
    this.sede = sede;
  }

  // Métodos para interactuar con los datos de los profesores en la base de datos

  static async getAll() {
    try {
      const profesores = await ProfesorDAO.getAll();
      return profesores;
    } catch (error) {
      throw new Error('Error al obtener todos los profesores');
    }
  }

  static async getById(id) {
    try {
      const profesor = await ProfesorDAO.getById(id);
      return profesor;
    } catch (error) {
      throw new Error('Error al obtener el profesor por ID');
    }
  }


  static async create(profesor) {
    try {
      await ProfesorDAO.create(profesor);
    } catch (error) {
      throw new Error('Error al crear el profesor');
    }
  }


  static async update(id, profesor) {
    try {
      await ProfesorDAO.update(profesor, id);
    } catch (error) {
      throw new Error('Error al actualizar el profesor');
    }
  }

  static async delete(id) {
    try {
      await ProfesorDAO.delete(id);
    } catch (error) {
      throw new Error('Error al eliminar el profesor');
    }
  }


  static async changeRol(id, rol) {
    try {
      await ProfesorDAO.changeRol(rol, id);
    } catch (error) {
      throw new Error('Error al cambiar el rol del profesor');
    }
  }
}

module.exports = ProfesorModel;
