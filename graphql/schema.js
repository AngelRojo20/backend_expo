const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Aprendiz {
        id: ID!
        nombre: String!
        apellido: String!
        correo: String!
        telefono: String
    }

    input AprendizInput {
        nombre: String!
        apellido: String!
        correo: String!
        telefono: String
    }

    type Query {
        aprendices: [Aprendiz!]!          # Obtener todos los aprendices
        aprendiz(id: ID!): Aprendiz       # Obtener un aprendiz por su ID
    }

    type Mutation {
        createAprendiz(input: AprendizInput!): Aprendiz    # Crear un nuevo aprendiz
        updateAprendiz(id: ID!, input: AprendizInput!): Aprendiz # Actualizar un aprendiz existente
        deleteAprendiz(id: ID!): DeleteResponse            # Eliminar un aprendiz
    }

    type DeleteResponse {
        message: String
    }
`;

module.exports = typeDefs;