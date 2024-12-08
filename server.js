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

// Prueba de conexión
sequelize.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

// Middleware de errores
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Si el error es manejado por GraphQL, no intervenir
    if (req.path === '/graphql') {
        return next(err); // Deja que GraphQL gestione el error
    }

    // Manejo genérico de errores
    res.status(err.status || 500).json({ 
        error: err.message || 'Error interno del servidor' 
    });
});
