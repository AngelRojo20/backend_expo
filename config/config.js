const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar las variables del archivo .env

// Singleton para la conexión a la base de datos
class Database {
    constructor() {
        if (!Database.instance) {
            console.log('Inicializando nueva instancia de la base de datos'); // Log para verificar el Singleton
            this.sequelize = new Sequelize(
                process.env.DB_NAME,       // Nombre de la base de datos
                process.env.DB_USER,       // Usuario de la base de datos
                process.env.DB_PASSWORD,   // Contraseña de la base de datos
                {
                    host: process.env.DB_HOST, // Host de la base de datos
                    port: process.env.DB_PORT, // Puerto de la base de datos
                    dialect: 'mysql',         // Dialecto (MySQL)
                }
            );
            Database.instance = this;
        }
        return Database.instance;
    }

    getInstance() {
        return this.sequelize;
    }
}

// Exportamos una instancia única de la clase
module.exports = new Database();