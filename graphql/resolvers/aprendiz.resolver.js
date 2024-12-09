module.exports = (aprendizService) => ({
    Query: {
        aprendices: async () => {
            return await aprendizService.getAllAprendices();
        },
        aprendiz: async (_, { id }) => {
            return await aprendizService.getAprendizById(id);
        },
    },
    Mutation: {
        createAprendiz: async (_, { input }) => {
            return await aprendizService.createAprendiz(input);
        },
        updateAprendiz: async (_, { id, input }) => {
            return await aprendizService.updateAprendiz(id, input);
        },
        deleteAprendiz: async (_, { id }) => {
            await aprendizService.deleteAprendiz(id);
            return { message: `Aprendiz con ID ${id} eliminado.` };
        },
    },
});