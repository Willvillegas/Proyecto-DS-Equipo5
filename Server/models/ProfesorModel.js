class ProfesorModel {
  constructor(id,correo, contrasenna, nombre, apellidos, oficina, personal, sede, codigo, foto) {
      this._id = id;  
      this._correo = correo;
      this._contrasenna = contrasenna;
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._oficina = oficina;
      this._personal = personal;
      this._sede = sede;
      this._codigo = codigo;
      this._foto = foto;
  }

  get correo() {
      return this._correo;
  }

  get contrasenna() {
      return this._contrasenna;
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

  get codigo() {
      return this._codigo;
  }

  get foto() {
      return this._foto;
  }

  set correo(correo) {
      this._correo = correo;
  }

  set contrasenna(contrasenna) {
      this._contrasenna = contrasenna;
  }

  set nombre(nombre) {
      this._nombre = nombre;
  }

  set apellidos(apellidos) {
      this._apellidos = apellidos;
  }

  set oficina(oficina) {
      this._oficina = oficina;
  }

  set personal(personal) {
      this._personal = personal;
  }

  set sede(sede) {
      this._sede = sede;
  }

  set codigo(codigo) {
      this._codigo = codigo;
  }

  set foto(foto) {
      this._foto = foto;
  }
}

module.exports = ProfesorModel;
