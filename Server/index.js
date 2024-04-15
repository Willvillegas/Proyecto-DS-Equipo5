//importando express
const express = require('express');
const cors = require('cors');
const  app = express();
app.use(cors());

//prueba de hola mundo
app.get('/', (req, res) => {
    res.send("Hola mundo! \n");
});
//abriendo el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});


