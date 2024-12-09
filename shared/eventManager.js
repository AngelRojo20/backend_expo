class EventManager {
    constructor() {
        if (!EventManager.instance) {
            this.events = {};
            EventManager.instance = this;
        }

        return EventManager.instance;
    }

    subscribe(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    notify(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((listener) => listener(data));
        }
    }
}

module.exports = new EventManager(); // Exporta una instancia única
