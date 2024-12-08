const Aprendiz = require('../models/aprendiz');

const resolvers = {
  Query: {
    aprendices: async () => await Aprendiz.findAll(),
  },
  Mutation: {
    crearAprendiz: async (_, { nombre, apellido, correo, telefono }) => {
      return await Aprendiz.create({ nombre, apellido, correo, telefono });
    },
    actualizarAprendiz: async (_, { id, ...rest }) => {
      const aprendiz = await Aprendiz.findByPk(id);
      if (!aprendiz) throw new Error('Aprendiz no encontrado');
      await aprendiz.update(rest);
      return aprendiz;
    },
    eliminarAprendiz: async (_, { id }) => {
      const aprendiz = await Aprendiz.findByPk(id);
      if (!aprendiz) throw new Error('Aprendiz no encontrado');
      await aprendiz.destroy();
      return 'Aprendiz eliminado exitosamente';
    },
  },
};

module.exports = resolvers;
