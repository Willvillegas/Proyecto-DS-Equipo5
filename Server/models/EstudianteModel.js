class EstudianteModel {
    constructor(id, carnet, nombre, apellido1,apellido2, correo, telefono, sede, estado, equipo) {
        this.id = id;
        this.carnet =carnet;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correo = correo;
        this.telefono = telefono;
        this.sede= sede;
        this.estado= estado;
        this.equipo= equipo;
    }

    getCarnet() {
        return this.carnet;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido1() {
        return this.apellido1;
    }

    getApellido2() {
        return this.apellido2;
    }

    getCorreo() {
        return this.correo;
    }

    getTelefono() {
        return this.telefono;
    }

    getSede() {
        return this.sede;
    }

    getEstado() {
        return this.estado;
    }
    
    getEquipo() {
        return this.equipo;
    }   

    setCarnet(carnet) {
        this.carnet = carnet;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido1(apellido1) {
        this.apellido1 = apellido1;
    }

    setApellido2(apellido2) {
        this.apellido2 = apellido2;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    setSede(sede) {
        this.sede = sede;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setEquipo(equipo) {
        this.equipo = equipo;
    }   
}

module.exports = EstudianteModel;