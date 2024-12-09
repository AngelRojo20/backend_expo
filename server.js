const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/config');
const typeDefs = require('./graphql/schema');
const container = require('./container'); // Importa el contenedor de dependencias

const app = express();

// Resolver las dependencias
const aprendizResolvers = container.get('aprendizResolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers: aprendizResolvers,
});

(async () => {
    await server.start();
    server.applyMiddleware({ app });
})();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}${server.graphqlPath}`);
});
