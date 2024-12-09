const { DataTypes } = require('sequelize');
const sequelize = require('../config/config').getInstance();

const Aprendiz = sequelize.define('Aprendiz', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, // No permitir cadenas vacías
        },
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, // Validar formato de correo
        },
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true, // Validar que solo contenga números
        },
    },
}, {
    tableName: 'aprendiz',
    timestamps: false,
});

module.exports = Aprendiz;