const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
//class handling the jsonwebtoken
class JsonWebToken {
    //method to generate a token when the user logs in
    static async generateLoginToken(usuario) {
        const token = jwt.sign({ correo: usuario }, 'Proyecto-DS', { expiresIn: 60 * 60 * 24 * 7 });
        return token;
    }
    //method to generate a token when the user restores the password
    static async generateRestoreToken(usuario) {
        const token = await jwt.sign({ correo: usuario }, 'Proyecto-DS', { expiresIn: 60 * 60 * 2 });
        return token;
    }
    //method to verify the token
    static async verifyToken(token) {
        return jwt.verify(token, 'Proyecto-DS',(err, decoded) => {
            if (err) {
                return false;
            }
            return decoded;
        });
    }


}

module.exports = JsonWebToken;