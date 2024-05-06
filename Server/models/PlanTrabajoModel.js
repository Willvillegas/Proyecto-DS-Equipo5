class PlanTrabajoModel {
    constructor(id, nombre, estado, equipo) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.equipo = equipo;

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

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    getEquipo() {
        return this.equipo;
    }

    setEquipo(equipo) {
        this.equipo = equipo;
    }
}

module.exports = PlanTrabajoModel;
