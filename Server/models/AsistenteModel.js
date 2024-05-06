class AsistenteModel {
  constructor(id, nombre, apellido, sede) {
      this._id = id;  
      this._nombre = nombre;
      this._apellido = apellido;
      this._sede = sede;
  }

  get nombre() {
      return this._nombre;
  }

  get apellido() {
      return this._apellido;
  }

  get sede() {
      return this._sede;
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

  set sede(sede) {
      this._sede = sede;
  }

  set id(id) {
      this._id = id;
  }
}

module.exports = AsistenteModel;
