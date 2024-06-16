const calcularFechasRecordatorio = (fechaRealizacion, diasParaRecordatorio) => {
    let fechas = [];
    //diasParaRecordatorio es un numero entero ejemplo:
    /**
     * diasParaRecordatorio = 7
     * entonces se generan 7 fechas de recordatorio
     */
    for (let i = 1; i <= diasParaRecordatorio; i++) {
        let fecha = new Date(fechaRealizacion);
        fecha.setDate(fecha.getDate() - i);
        fechas.push(fecha.toISOString().slice(0, 10));
    }
    return fechas;
};
module.exports = {calcularFechasRecordatorio};