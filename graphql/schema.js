const { gql } = require('apollo-server-express');

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

  type Mutation {
    crearAprendiz(nombre: String!, apellido: String!, correo: String!, telefono: String): Aprendiz!
    actualizarAprendiz(id: ID!, nombre: String, apellido: String, correo: String, telefono: String): Aprendiz
    eliminarAprendiz(id: ID!): String
  }
`;

module.exports = typeDefs;
