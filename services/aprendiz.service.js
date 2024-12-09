class AprendizService {
    constructor(aprendizRepository) {
        this.aprendizRepository = aprendizRepository;
    }

    async createAprendiz(data) {
        return await this.aprendizRepository.create(data);
    }

    async updateAprendiz(id, data) {
        return await this.aprendizRepository.update(id, data);
    }

    async deleteAprendiz(id) {
        return await this.aprendizRepository.delete(id);
    }

    async getAllAprendices() {
        return await this.aprendizRepository.getAll();
    }

    async getAprendizById(id) {
        return await this.aprendizRepository.findById(id);
    }
}

module.exports = AprendizService;