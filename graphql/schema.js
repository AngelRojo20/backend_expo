const { gql } = require('apollo-server-express'); // Importamos gql para definir el esquema

// Definimos el esquema de GraphQL
const typeDefs = gql`
    type Aprendiz {
        id: ID!
        nombre: String!
        apellido: String!
        correo: String!
        telefono: String
    }

    type Query {
        aprendices: [Aprendiz!]!
    }
`;

module.exports = typeDefs; // Exportamos el esquema
