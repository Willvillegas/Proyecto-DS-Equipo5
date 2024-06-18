const {ConnectionDAO}   = require('./ConnectionDAO');
/**
 * const {Estudiante} = require('../models/Estudiante.js');
 */
// class that represents the EstudianteDAO
class EstudianteDAO{
    //method to get all the estudiantes from the database
    static async getAll(idEquipo){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEstudiantes", {
                idEquipo: idEquipo,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting estudiantes: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }
    //method to get an estudiante by id from the database
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEstudianteId", {
                id: id,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting estudiante by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //method to create an estudiante in the database
    static async create(estudiante, idEquipo){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearEstudiante", {
                idEquipo: idEquipo,
	            carnet: estudiante.carnet,
	            correo: estudiante.correo,
	            nombre: estudiante.nombre,
	            apellido1: estudiante.apellido1,
	            apellido2: estudiante.apellido2,
	            telefono: estudiante.telefono,
	            sede: estudiante.sede,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error creating estudiante: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //method to update an estudiante in the database
    static async update(estudiante, id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            console.log('Estudiante a actualizar:', estudiante);
            const result = await connection.executeProcedures("ModificarEstudiante", {
                id:id,
	            carnet: estudiante.carnet,
	            correo: estudiante.correo,
	            nombre: estudiante.nombre,
	            apellido1: estudiante.apellido1,
	            apellido2: estudiante.apellido2,
	            telefono: estudiante.telefono,
	            sede: estudiante.sede,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log('Estudiante actualizado:', estudiante);
            return result;
        } catch (error) {
            console.log('Error updating estudiante: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //method to delete an estudiante from the database
    static async delete(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarEstudiante", {
                id: id,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error deleting estudiante: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    /**
     * Fase 3:
     */
    //Method to get the photo of an estudiante
    static async getPhoto(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarFotoEstudiante", {
                id: id,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting estudiante photo: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //Method to update the photo of an estudiante
    static async updatePhoto(id, file){
        const connection = await ConnectionDAO.getInstance();
        try {
            const fileBuffer = Buffer.from(file, 'base64');
            await connection.connect();
            const result = await connection.executeProcedures("ModificarEstudianteFoto", {
                id: id,
                foto: fileBuffer,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error updating estudiante photo: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    static async getUserById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarEstudianteUsuarioId", {
                id: id,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            return result;
        } catch (error) {
            console.log('Error getting estudiante by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
}
module.exports = EstudianteDAO;
