require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); 
  });

module.exports = sequelize;

