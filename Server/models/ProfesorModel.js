const profesorDAO = require('../DAOs/ProfesorDAO.js');
class ProfesorModel {
  constructor( nombre, apellidos, codigo, oficina, personal, sede, tipo, correo, contrasenna) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._codigo = codigo;
      this._oficina = oficina;
      this._personal = personal;
      this._sede = sede;
      this._tipo = tipo
      this._correo = correo;
      this._contrasenna = contrasenna;
  }
  static async getById(id) {
    try{
        const profesorData = await profesorDAO.getById(id);
        // the profesorData is an array of objects
        // we need to convert the object to a ProfesorModel object
        // we use the map function to iterate over the array of objects
        const profesor = profesorData.map(profesorData => new ProfesorModel(profesorData.nombre, profesorData.apellidos, profesorData.codigo, profesorData.telOficina, profesorData.telPersonal, profesorData.Sede, profesorData.Tipo, profesorData.correo, profesorData.contrasenna));
        if (profesor.length > 0){
            return profesor[0];
        }else{
            return null;
        }
    }catch (error){
        throw error;
    }
  }
    static async getAll() {
        try{
            const profesoresData = await profesorDAO.getAll();
            return profesoresData.map(profesorData => new ProfesorModel(profesorData.id, profesorData.correo, profesorData.contrasenna, profesorData.nombre, profesorData.apellidos, profesorData.oficina, profesorData.personal, profesorData.sede, profesorData.codigo, profesorData.foto));
        }catch (error){
            throw error;
        }
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
