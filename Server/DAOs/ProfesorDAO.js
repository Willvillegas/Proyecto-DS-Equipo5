const {ConnectionDAO} = require('./ConnectionDAO.js');
/*
const profesorModel = require('../models/Profesor.js');
*/
// class that represents the ProfesorDAO
class ProfesorDAO{

    static async getAll(){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarProfesores", {
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting profesores: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarProfesorId", {
                id: id, //Se para el id del profesor o usuario
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error getting profesor by id: ', error); 
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async create(profesor){
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearProfesor", {
                correo: profesor.correo,
	            contra: profesor.contrasenna,
	            nombre: profesor.nombre,
	            apellidos: profesor.apellidos,
	            oficina: profesor.oficina,
	            personal: profesor.personal,
	            sede: profesor.sede, //Nombre de la cede
	            codigo: profesor.codigo, // Codigo en forma de CA- o SJ-
                foto: profesor.foto,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error creating profesor: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async update(profesor, id, idAsistente){
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarProfesorId", {
                idAsistente: idAsistente,
                idProfesor: id, //Se pasa el id del profesor o usuario
                correo: profesor.correo,
	            contra: profesor.contrasenna,
	            nombre: profesor.nombre,
	            apellidos: profesor.apellidos,
	            oficina: profesor.oficina,
	            personal: profesor.personal,
	            sede: profesor.sede, //Nombre de la cede
                foto: profesor.foto,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error updating profesor: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async delete(id, idAsistente){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarProfesor", {
                idAsistente: idAsistente,
                idProfesor: id, //Se pasa el id del profesor o usuario
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error deleting profesor ', error); 
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async changeRol(rol, id, idAsistente){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarRolProfesor", {
                idAsistente: idAsistente,
                idProfesor: id, //Se pasa el id del profesor o usuario
                rol: rol, // Se pasa el nombre del rol
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error deleting profesor ', error); 
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }

}

module.exports = ProfesorDAO;
