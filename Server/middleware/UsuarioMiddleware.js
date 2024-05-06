const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

class UsuarioMiddleware{
    static async usuarioLogged(req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
        jwt.verify(token, 'Proyecto-DS', (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            req.usuario = decoded;
            next();
        });
    }
}


module.exports = UsuarioMiddleware;













/*
usuarioLogged= (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    jwt.verify(token, 'Proyecto-DS', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.usuario = decoded;
        next();
    });
}
module.exports = usuarioLogged;*/