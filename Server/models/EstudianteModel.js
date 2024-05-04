class EstudianteModel {
    constructor(id, nombre, apellido, correo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
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

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getCorreo() {
        return this.correo;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

}

module.exports = EstudianteModel;