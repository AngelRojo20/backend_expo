class EventManager {
    constructor() {
        this.events = {}; // Almacena los eventos y sus respectivos listeners
    }

    // Registrar un listener para un evento específico
    subscribe(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    // Notificar a todos los listeners de un evento
    notify(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((listener) => listener(data));
        }
    }
}

module.exports = new EventManager(); // Exporta una única instancia (Singleton)