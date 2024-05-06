//importando express
const { json } = require('express');
const express = require('express');
const cors = require('cors');
const  app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.disable('x-powered-by');


//prueba de hola mundo
app.get('/', (req, res) => {
    res.send("Hola mundo! \n");
});
//abriendo el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});



