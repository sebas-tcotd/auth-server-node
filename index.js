const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// El orden es importante

// Creación del servidor/aplicación de Express
const app = express();

//Conexión a la base de datos
dbConnection();

//Directorio público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//CORS
app.use(cors());

//Rutas
app.use('/api/auth', require('./routes/auth.route'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT} (⌐■_■)`)
});