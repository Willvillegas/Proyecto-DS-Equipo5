//importando express
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
//importando la hora del servidor
const { getServerTime, setServerTime } = require('./utils/serverTime');
//importando los routes
const actividadRoute = require('./routes/ActividadRoute');
const asistenteRoute = require('./routes/AsistenteRoute');
const comentarioRoute = require('./routes/ComentarioRoute');//
const equipoGuiaRoute = require('./routes/EquipoGuiaRoute');
const estudianteRoute = require('./routes/EstudianteRoute');
const planTrabajoRoute = require('./routes/PlanTrabajoRoutes');
const profesorRoute = require('./routes/ProfesorRoute');//
const usuarioRoute = require('./routes/UsuarioRoute');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        //origin: ["https://proyecto-ds-equipo5.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));
//app.use(json());
app.use(cookieParser());
app.disable('x-powered-by');
app.use(bodyParser.json())
/**
Todos los routes 
*/
app.use('/api/actividades', actividadRoute);
app.use('/api/asistentes', asistenteRoute);
app.use('/api', comentarioRoute);
app.use('/api/equiposguia', equipoGuiaRoute);
app.use('/api/plantrabajo', planTrabajoRoute);
app.use('/api/estudiantes', estudianteRoute);
app.use('/api', profesorRoute);
app.use('/api', usuarioRoute);

/**
 * Endpoint para obtener la hora del servidor
 */
app.get('/api/server-time', (req, res) => {
    res.send(getServerTime());
});

/**
 * Endpoint para cambiar la hora del servidor
 * Se espera un body con el siguiente formato:
 * {
 * "newTime": "YYYY-MM-DD HH:mm:ss"
 * }
 * @param newTime
 * Ejemplo: para setear la hora a 30 de junio de 2024 a las 00:00:00
 * {
 * "newTime":"2024-06-30T00:00:00-06:00"
 * } 
 * */
app.post('/api/server-time', (req, res) => {
    const newTime = req.body.newTime;
    try {
        if (!newTime) {
            throw new Error('newTime is required');
        }
        setServerTime(newTime);
        /**A definirse si implementar aqui el comportamiento de las actividades con respecto a las fechas */
        res.send(getServerTime());
    } catch (e) {
        res.status(400).send(e.message);
    }

});

//prueba de hola mundo
app.get('/', (req, res) => {
    res.send("Hola mundo! \n");
});
//abriendo el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});