class ComentarioModel {
    constructor(id, titulo, fecha, cuerpo, profesor, actividad) {
        this._id = id;
        this._titulo = titulo;
        this._fecha = fecha;
        this._cuerpo = cuerpo;
        this._profesor = profesor;
        this._actividad = actividad;
    }

    get id() {
        return this._id;
    }

    get titulo() {
        return this._titulo;
    }

    get fecha() {
        return this._fecha;
    }

    get cuerpo() {
        return this._cuerpo;
    }

    get profesor() {
        return this._profesor;
    }

    get actividad() {
        return this._actividad;
    }

    set id(value) {
        this._id = value;
    }

    set titulo(value) {
        this._titulo = value;
    }

    set fecha(value) {
        this._fecha = value;
    }

    set cuerpo(value) {
        this._cuerpo = value;
    }

    set profesor(value) {
        this._profesor = value;
    }

    set actividad(value) {
        this._actividad = value;
    }
}

module.exports = ComentarioModel;
