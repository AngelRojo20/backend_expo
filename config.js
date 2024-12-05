const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aprendices', 'root', 'Miguel1996Angel*', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

module.exports = sequelize;
