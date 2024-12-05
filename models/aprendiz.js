const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Aprendiz = sequelize.define('Aprendiz', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'aprendiz',
    timestamps: false, 
});

module.exports = Aprendiz;
