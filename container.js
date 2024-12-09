const Aprendiz = require('./models/aprendiz');
const AprendizRepository = require('./repository/aprendiz.repository');
const AprendizService = require('./services/aprendiz.service');
const aprendizResolversFactory = require('./graphql/resolvers/aprendiz.resolver');

class Container {
    constructor() {
        this.dependencies = {};
        this.registerDependencies();
    }

    registerDependencies() {
        // Modelo
        this.dependencies.AprendizModel = Aprendiz;

        // Repositorio
        this.dependencies.aprendizRepository = new AprendizRepository(this.dependencies.AprendizModel);

        // Servicio
        this.dependencies.aprendizService = new AprendizService(this.dependencies.aprendizRepository);

        // Resolver
        this.dependencies.aprendizResolvers = aprendizResolversFactory(this.dependencies.aprendizService);
    }

    get(dependencyName) {
        if (!this.dependencies[dependencyName]) {
            throw new Error(`Dependencia ${dependencyName} no encontrada.`);
        }
        return this.dependencies[dependencyName];
    }
}

const container = new Container();
module.exports = container;