class EquipoGuiaModel {
    constructor(id, generacion) {
        this.id = id;
        this.generacion = generacion;
    }

    getGeneracion() {
        return this.generacion;
    }

    setGeneracion(generacion) {
        this.generacion = generacion;
    }
}

module.exports = EquipoGuiaModel;
