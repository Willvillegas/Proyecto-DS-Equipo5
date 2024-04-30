//singleton class to manage the connection to the database to mssql
const sql = require('mssql');
//export default
class ConnectionDAO{
    
    constructor(){
        if (!ConnectionDAO.instance) {
            const confing = {
                user: 'tu_usuario',
                password: 'tu_contraseña',
                server: 'tu_servidor', // Puede ser 'localhost\\nombre_instancia' para SQL Server en tu máquina local
                database: 'tu_base_de_datos',
                options: {
                  encrypt: true, // Si estás usando una conexión segura SSL
                },
            };
            this.connection = new sql.ConnectionPool(confing);
            this.connected = false;
            ConnectionDAO.instance = this;
        }
        return ConnectionDAO.instance;
    }
    //method to connect to the database
    async connect(){
        try {
            if (!this.connected) {
                await this.connection.connect();
                this.connected = true;
                console.log('Connected to database');   
            }            
        } catch (error) {
            console.log('Error connecting to database: ', error);
        }
    }
    //method to disconnect from the database
    async disconnect(){
        try {
            if (this.connected) {
                await this.connection.close();
                this.connected = false;
                console.log('Disconnected from database');
            }
        } catch (error) {
            console.log('Error disconnecting from database: ', error);
        }
    }
    //method to execute a query to the database
    async executeQuery(query){
        try {
            if (this.connected) {
                const request = this.connection.request();
                const result = await request.query(query);
                return result.recordset;
            }
        } catch (error) {
            console.log('Error executing query: ', error);
            throw error;
        }
    }
    //method to execute a stored procedure to the database
    
}

module.exports = ConnectionDAO;