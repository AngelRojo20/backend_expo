const AprendizRepository = require('../../repositories/AprendizRepository');
const container = require('../../utils/container');

const aprendizRepository = container.get('AprendizRepository');

const resolvers = {
    Mutation: {
        crearAprendiz: async (_, { nombre, apellido, correo, telefono }) => {
            try {
                const nuevoAprendiz = await aprendizRepository.create({ nombre, apellido, correo, telefono });
                return nuevoAprendiz;
            } catch (error) {
                console.error("Error al crear aprendiz:", error);
                throw new Error(error.message || 'Error al crear el aprendiz');
            }
        },
        actualizarAprendiz: async (_, { id, nombre, apellido, correo, telefono }) => {
            try {
                const aprendizActualizado = await aprendizRepository.update(id, { nombre, apellido, correo, telefono });
                return aprendizActualizado;
            } catch (error) {
                console.error("Error al actualizar aprendiz:", error);
                throw new Error(error.message || 'Error al actualizar el aprendiz');
            }
        },
        eliminarAprendiz: async (_, { id }) => {
            try {
                await aprendizRepository.delete(id);
                return { message: "Aprendiz eliminado exitosamente" };
            } catch (error) {
                console.error("Error al eliminar aprendiz:", error);
                throw new Error(error.message || 'Error al eliminar el aprendiz');
            }
        },
    }
};

module.exports = resolvers;