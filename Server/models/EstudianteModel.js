const EstudianteDAO = require('../DAOs/Estudiante');

class EstudianteModel {
    constructor(carnet, nombre, apellido1, apellido2, sede, correo, numeroCelular) {
        this.carnet = carnet;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.sede = sede;
        this.correo = correo;
        this.numeroCelular = numeroCelular;
    }

    // Métodos estáticos para interactuar con la base de datos a través del DAO
    static async getAll() {
        try {
            return await EstudianteDAO.getAll();
        } catch (error) {
            throw new Error('Error al obtener todos los estudiantes');
        }
    }

    static async getById(id) {
        try {
            return await EstudianteDAO.getById(id);
        } catch (error) {
            throw new Error('Error al obtener el estudiante por ID');
        }
    }

    static async create(estudiante) {
        try {
            return await EstudianteDAO.create(estudiante);
        } catch (error) {
            throw new Error('Error al crear el estudiante');
        }
    }

    static async update(estudiante) {
        try {
            return await EstudianteDAO.update(estudiante);
        } catch (error) {
            throw new Error('Error al actualizar el estudiante');
        }
    }

    static async delete(id) {
        try {
            return await EstudianteDAO.delete(id);
        } catch (error) {
            throw new Error('Error al eliminar el estudiante');
        }
    }
}

module.exports = EstudianteModel;
