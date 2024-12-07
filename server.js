const express = require('express');
const sequelize = require('./config');
const Aprendiz = require('./models/aprendiz');

const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Prueba
sequelize.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

    // Middleware de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

// Visualizar
app.get('/aprendices', async (request, response) => {
    try {
        const aprendices = await Aprendiz.findAll();
        response.status(200).json(aprendices);
    } catch (error) {
        response.status(500).json({ error: 'Error al obtener los registros.' });
    }
});

// Crear
app.post('/aprendices', async (request, response) => {
    try {
        const { nombre, apellido, correo, telefono } = request.body;
        const nuevoAprendiz = await Aprendiz.create({ nombre, apellido, correo, telefono });
        response.status(201).json({ message: 'Registro creado existosamente', id: nuevoAprendiz.id});
    } catch (error) {
        response.status(500).json({ error: 'Error al crear el registro.' });
    }
});

// Actualizar
app.put('/aprendices/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { nombre, apellido, correo, telefono } = request.body;

        const aprendiz = await Aprendiz.findByPk(id);
        if (!aprendiz) {
            return response.status(404).json({ error: 'Registro no encontrado.' });
        }

        await aprendiz.update({ nombre, apellido, correo, telefono });
        response.json({ message: 'Resgistro actualizado existosamente'});
    } catch (error) {
        response.status(500).json({ error: 'Error al actualizar el registro.' });
    }
});

// Eliminar
app.delete('/aprendices/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const aprendiz = await Aprendiz.findByPk(id);
        if (!aprendiz) {
            return response.status(404).json({ error: 'Registro no encontrado.' });
        }

        await aprendiz.destroy();
        response.json({ message: 'Registro eliminado exitosamente.' });
    } catch (error) {
        response.status(500).json({ error: 'Error al eliminar el registro.' });
    }
});