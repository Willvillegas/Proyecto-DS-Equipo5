const {ConnectionDAO} = require('./ConnectionDAO.js');

//Class that represents the UsuarioDAO
class UsuarioDAO{
    //Method to get a user by id
    //using id= correo
    static async getById(id){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            /*const result = await connection.executeProcedures("BuscarUsuarioId", {
                id: id, //Se para el id del profesor o usuario
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });*/
            const result = await connection.executeQuery(`SELECT * FROM Usuario WHERE correo = '${id}'`);
            return result;
        } catch (error) {
            console.log('Error getting usuario by id: ', error); 
            throw error;
        }finally{
            await ConnectionDAO.disconnect();
        }
    }
    //Method to update a user
    //actualiza la contraseña
    static async update(usuario){
        const connection = new ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("ModificarUsuario", {
                correo: usuario.correo,
                contra: usuario.contrasenna,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log (result)
            return result;
        }
        catch (error) {
            console.log('Error updating usuario: ', error);
            throw error;
        }
        finally{
            await ConnectionDAO.disconnect();
        }
    }
}
module.exports = UsuarioDAO;