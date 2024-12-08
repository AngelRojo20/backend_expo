// server.js
const express = require('express');
const sequelize = require('./config');
const aprendizRoutes = require('./routes/aprendiz.routes');

const app = express();
app.use(express.json());
app.use('/aprendices', aprendizRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

// Prueba de conexión
sequelize.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

// Middleware de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});