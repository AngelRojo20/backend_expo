const Aprendiz = require('../models/aprendiz');

const resolvers = {
  Query: {
      aprendices: async () => {
          try {
              return await Aprendiz.findAll(); 
          } catch (error) {
              console.error("Error al obtener aprendices:", error);
              throw new Error("No se pudo obtener la lista de aprendices");
          }
      },
  },
  Mutation: {
    crearAprendiz: async (_, { nombre, apellido, correo, telefono }) => {
      if (!nombre) {
          throw new Error('Nombre es un campo obligatorio');
      }
      if (!apellido) {
          throw new Error('Apellido es un campo obligatorio'); 
      }
      if (!correo) {
          throw new Error('Correo es un campo obligatorio');
      }
      if (!telefono) {
        throw new Error('Telefono es un campo obligatorio');
      }
      try {
          return await Aprendiz.create({ nombre, apellido, correo, telefono });
      } catch (error) {
          console.error("Error al crear aprendiz:", error);
          throw new Error('Error al crear el aprendiz');
      }
  },

  actualizarAprendiz: async (_, { id, nombre, apellido, correo, telefono }) => {
    if (!id) {
        throw new Error('ID es un campo obligatorio');
    }
    const aprendiz = await Aprendiz.findByPk(id);
    if (!aprendiz) {
        throw new Error('Aprendiz no encontrado');
    }
    if (!nombre && !apellido && !correo && !telefono) {
        throw new Error('Al menos un campo debe ser actualizado');
    }

    await aprendiz.update({ nombre, apellido, correo, telefono });
    return aprendiz;
},

  eliminarAprendiz: async (_, { id }) => {
    if (!id) {
        throw new Error('ID es un campo obligatorio');
    }

    const aprendiz = await Aprendiz.findByPk(id);
    if (!aprendiz) {
        throw new Error('Aprendiz no encontrado');
    }

    await aprendiz.destroy();
    return 'Aprendiz eliminado exitosamente';
  },
  },
};

module.exports = resolvers;
