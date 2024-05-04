class PlanTrabajoModel {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

module.exports = PlanTrabajoModel;
