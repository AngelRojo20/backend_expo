const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
app.use(express.json());
const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
    await server.start(); // Arrancamos el servidor de Apollo
    server.applyMiddleware({ app }); // ApolloServer utiliza Express
})();

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
