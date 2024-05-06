class ProfesorModel {
    constructor(id, codigo, nombre, apellidos, oficina, personal, sede, tipo) {
      this._id = id;
      this._codigo = codigo;
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._oficina = oficina;
      this._personal = personal;
      this._sede = sede;
      this._tipo = tipo;
    }
  
    // Getters
    get id() {
      return this._id;
    }
  
    get codigo() {
      return this._codigo;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get apellidos() {
      return this._apellidos;
    }
  
    get oficina() {
      return this._oficina;
    }
  
    get personal() {
      return this._personal;
    }
  
    get sede() {
      return this._sede;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    // Setters
    set id(value) {
      this._id = value;
    }
  
    set codigo(value) {
      this._codigo = value;
    }
  
    set nombre(value) {
      this._nombre = value;
    }
  
    set apellidos(value) {
      this._apellidos = value;
    }
  
    set oficina(value) {
      this._oficina = value;
    }
  
    set personal(value) {
      this._personal = value;
    }
  
    set sede(value) {
      this._sede = value;
    }
  
    set tipo(value) {
      this._tipo = value;
    }
  }
  
  module.exports = ProfesorModel;
  