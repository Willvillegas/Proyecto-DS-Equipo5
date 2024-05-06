const {ConnectionDAO} = require('./ConnectionDAO.js');

//Class that represents the UsuarioDAO
class UsuarioDAO{
    //Method to get a user by id
    //using id= correo
    static async getById(correo){
        const connection = await ConnectionDAO.getInstance();
        try {
            await connection.connect();
            const result = await connection.executeProcedures("BuscarUsuarioCorreo", {
                correo: correo,
                outCodeResult: { type: "INT", direction: "OUTPUT" }
            });
            console.log (result)
            return result;
        } catch (error) {
            console.log('Error getting usuario by mail: ', error); 
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