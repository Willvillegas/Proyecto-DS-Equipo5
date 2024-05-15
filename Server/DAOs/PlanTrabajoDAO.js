const {ConnectionDAO} = require('./ConnectionDAO');

// class that represents the PlanTrabajo
class PlanTrabajoDAO{

    //method to get all the planes guia from the database
    static async getAll(id){
        id = 1
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarPlanes", {
                id: id, // id del equipo
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)  
            return result;
        } catch (error) {
            console.log('Error getting planes: ', error);
            throw error;
        } finally {
            await ConnectionDAO.disconnect();
        }
    }

    //method to get an plan by id from the database
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarPlanId", {
                id: id, // Id del plan
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error getting plan by id: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }

    //method to create an plan in the database
    static async create(id, planTrabajo){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("CrearPlan", {
                id: id, // Id del equipo
                nombre: planTrabajo.nombre,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error creating plan: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }

    //method to update an plan in the database
    static async update(id, planTrabajo){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarPlan", {
                id: id, // Id del plan
                gnombre: planTrabajo.nombre,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result) 
            return result;
        } catch (error) {
            console.log('Error updating plan: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect()
        }
    }

    //method to delete an plan in the database
    static async delete(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("EliminarPan", {
                id: id, // Id del plan
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log('Error deleting plan: ', error);
            throw error;
        }finally{
            await ConnectionDAO.disconnect()
        }
    }
}
module.exports = PlanTrabajoDAO;