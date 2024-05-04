class AsistenteModel {
  constructor(nombre, apellido, correo, id) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._correo = correo;
      this._id = id;
  }

  get nombre() {
      return this._nombre;
  }

  get apellido() {
      return this._apellido;
  }

  get correo() {
      return this._correo;
  }

  get id() {
      return this._id;
  }
  
  set nombre(nombre) {
      this._nombre = nombre;
  }

  set apellido(apellido) {
      this._apellido = apellido;
  }

  set correo(correo) {
      this._correo = correo;
  }

  set id(id) {
      this._id = id;
  }
}

module.exports = AsistenteModel;
