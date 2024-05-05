class UsuarioModel {
    constructor(id,correo,contrasenna,tipo,estado) {
        this._id =id;
        this._correo = correo;
        this._contrasenna = contrasenna;
        this._tipo = tipo;
        this._estado = estado;
    }
    get id() {
        return this._id;
    }
    get correo() {
        return this._correo;
    }
    get contrasenna() {
        return this._contrasenna;
    }
    get tipo() {
        return this._tipo;
    }
    get estado() {
        return this._estado;
    }
    set id(id) {
        this._id = id;
    }
    set correo(correo) {
        this._correo = correo;
    }
    set contrasenna(contrasenna) {
        this._contrasenna = contrasenna;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set estado(estado) {
        this._estado = estado;
    }
}
module.exports = UsuarioModel;