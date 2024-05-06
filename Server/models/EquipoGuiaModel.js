class EquipoGuiaModel {
    constructor(id, generacion, estado) {
        this.id = id;
        this.generacion = generacion;
        this.estado = estado;
    }

    getGeneracion() {
        return this.generacion;
    }

    setGeneracion(generacion) {
        this.generacion = generacion;
    }

    getEstado() {
        return this.estado;
    }
    
    setEstado(estado) {
        this.estado = estado;
    }
}

module.exports = EquipoGuiaModel;
