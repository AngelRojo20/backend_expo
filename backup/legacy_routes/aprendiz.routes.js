const express = require('express');
const Aprendiz = require('../../models/aprendiz');
const router = express.Router();

// GET: Listar todos los aprendices
router.get('/', async (req, res, next) => {
    try {
        const aprendices = await Aprendiz.findAll();
        res.status(200).json(aprendices);
    } catch (error) {
        next(error);
    }
});

// POST: Crear un nuevo aprendiz
router.post('/', async (req, res, next) => {
    try {
        const { nombre, apellido, correo, telefono } = req.body;
        const nuevoAprendiz = await Aprendiz.create({ nombre, apellido, correo, telefono });
        res.status(201).json({ message: 'Registro creado existosamente', id: nuevoAprendiz.id });
    } catch (error) {
        next(error);
    }
});

// PUT: Actualizar aprendiz por ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, correo, telefono } = req.body;

        const aprendiz = await Aprendiz.findByPk(id);
        if (!aprendiz) return res.status(404).json({ error: 'Registro no encontrado.' });

        await aprendiz.update({ nombre, apellido, correo, telefono });
        res.json({ message: 'Registro actualizado existosamente' });
    } catch (error) {
        next(error);
    }
});

// DELETE: Eliminar aprendiz por ID
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        const aprendiz = await Aprendiz.findByPk(id);
        if (!aprendiz) return res.status(404).json({ error: 'Registro no encontrado.' });

        await aprendiz.destroy();
        res.json({ message: 'Registro eliminado exitosamente.' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;