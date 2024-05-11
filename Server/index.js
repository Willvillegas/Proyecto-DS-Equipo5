//importando express
const { json } = require('express');
const express = require('express');
const cors = require('cors');
const  app = express();
const cookieParser = require('cookie-parser');
//importando los routes
const actividadRoute = require('./routes/ActividadRoute');
const asistenteRoute = require('./routes/AsistenteRoute');
const comentarioRoute = require('./routes/ComentarioRoute');//
const equipoGuiaRoute = require('./routes/EquipoGuiaRoute');
const estudianteRoute = require('./routes/EstudianteRoute');
const planTrabajoRoute = require('./routes/PlanTrabajoRoutes');
const profesorRoute = require('./routes/ProfesorRoute');//
const usuarioRoute = require('./routes/UsuarioRoute');

app.use(express.urlencoded({extended: false}));
app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());
app.disable('x-powered-by');

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


//prueba de hola mundo
app.get('/', (req, res) => {
    res.send("Hola mundo! \n");
});
//abriendo el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});