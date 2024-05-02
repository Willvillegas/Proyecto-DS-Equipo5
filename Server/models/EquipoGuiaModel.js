const EquipoGuiaDAO = require('../DAOs/EquipoGuiaDAO');

class EquipoGuiaModel {
    constructor(nombre, listaProfesores, listaEstudiantes, sede, planTrabajo) {
        this.nombre = nombre;
        this.listaProfesores = listaProfesores;
        this.listaEstudiantes = listaEstudiantes;
        this.sede = sede;
        this.planTrabajo = planTrabajo;
    }
    // Métodos estáticos para interactuar con la base de datos a través del DAO
    async save() {
        try {
            const result = await EquipoGuiaDAO.create(this);
            return result;
        } catch (error) {
            console.log('Error al guardar el equipo guía: ', error);
            throw error;
        }
    }

    async update() {
        try {
            const result = await EquipoGuiaDAO.update(this);
            return result;
        } catch (error) {
            console.log('Error al actualizar el equipo guía: ', error);
            throw error;
        }
    }

    async delete() {
        try {
            const result = await EquipoGuiaDAO.delete(this.id);
            return result;
        } catch (error) {
            console.log('Error al eliminar el equipo guía: ', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await EquipoGuiaDAO.getById(id);
            return result;
        } catch (error) {
            console.log('Error al obtener el equipo guía por ID: ', error);
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await EquipoGuiaDAO.getAll();
            return result;
        } catch (error) {
            console.log('Error al obtener todos los equipos guía: ', error);
            throw error;
        }
    }

}

module.exports = EquipoGuiaModel;
