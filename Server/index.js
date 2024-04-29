//importando express
const express = require('express');
const cors = require('cors');
const  app = express();
const cokieParser = require('cookie-parser');

app.use(cors());
app.use(json());
app.use(cookieParser());

//prueba de hola mundo
app.get('/', (req, res) => {
    res.send("Hola mundo! \n");
});
//abriendo el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});


