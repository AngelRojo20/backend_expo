// repositories/AprendizRepository.js
const eventManager = require('../eventManager');

class AprendizRepository {
    constructor(AprendizModel) {
        this.Aprendiz = AprendizModel;
    }

    // Método para validar los campos
    validateAprendiz(data) {
        const { nombre, apellido, correo, telefono } = data;

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
    }

    async create(data) {
        this.validateAprendiz(data); // Validación centralizada
        const newAprendiz = await this.Aprendiz.create(data);
        eventManager.notify('aprendizCreated', newAprendiz);
        return newAprendiz;
    }

    async update(id, data) {
        this.validateAprendiz(data); // Validación centralizada
        const aprendiz = await this.Aprendiz.findByPk(id);
        if (!aprendiz) {
            throw new Error('Aprendiz no encontrado');
        }
        const updatedAprendiz = await aprendiz.update(data);
        eventManager.notify('aprendizUpdated', updatedAprendiz);
        return updatedAprendiz;
    }

    async delete(id) {
        const aprendiz = await this.Aprendiz.findByPk(id);
        if (!aprendiz) {
            throw new Error('Aprendiz no encontrado');
        }
        await aprendiz.destroy();
        eventManager.notify('aprendizDeleted', { id });
        return true;
    }
}

module.exports = AprendizRepository;

