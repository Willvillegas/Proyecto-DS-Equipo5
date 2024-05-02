const AsistenteDAO = require('../DAOs/AsistenteDAO');

class AsistenteModel {
    constructor(id, nombre, apellido, sede) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.sede = sede;
    }
  
    // Métodos estáticos para interactuar con la base de datos a través del DAO
    static async getAll() {
      try {
        const asistentesData = await AsistenteDAO.getAll();
        const asistentes = asistentesData.map(asistente => new AsistenteModel(asistente.id, asistente.nombre, asistente.apellido, asistente.sede));
        return asistentes;
      } catch (error) {
        console.error('Error al obtener los asistentes:', error);
        throw error;
      }
    }
  
    static async getById(id) {
      try {
        const asistenteData = await AsistenteDAO.getById(id);
        if (asistenteData) {
          const asistente = new AsistenteModel(asistenteData.id, asistenteData.nombre, asistenteData.apellido, asistenteData.sede);
          return asistente;
        } else {
          throw new Error('Asistente no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el asistente por ID:', error);
        throw error;
      }
    }
  
    static async create(nuevoAsistente) {
      try {
        const result = await AsistenteDAO.create(nuevoAsistente);
        return result;
      } catch (error) {
        console.error('Error al crear el asistente:', error);
        throw error;
      }
    }
  
    static async update(asistenteActualizado) {
      try {
        const result = await AsistenteDAO.update(asistenteActualizado);
        return result;
      } catch (error) {
        console.error('Error al actualizar el asistente:', error);
        throw error;
      }
    }
  }
  
  module.exports = AsistenteModel;
  