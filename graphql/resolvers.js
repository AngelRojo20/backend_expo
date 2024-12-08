const Aprendiz = require('../models/aprendiz'); // Importamos el modelo Sequelize

// Definimos los resolvers
const resolvers = {
    Query: {
        aprendices: async () => {
            try {
                return await Aprendiz.findAll(); // Obtenemos todos los registros
            } catch (error) {
                console.error("Error al obtener aprendices:", error);
                throw new Error("No se pudo obtener la lista de aprendices");
            }
        },
    },
};

module.exports = resolvers; // Exportamos los resolvers
