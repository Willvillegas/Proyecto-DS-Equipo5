const { ActividadDAO } = require('../DAOs/ActividadDAO');

const calcularFechasRecordatorio = (fechaRealizacion, diasParaRecordatorio, fechaSistema) => {
    let fechas = [];
    let fechaSistemaISO = new Date(fechaSistema).toISOString().slice(0, 10);
    
    for (let i = 1; i <= diasParaRecordatorio; i++) {
        let fecha = new Date(fechaRealizacion);
        fecha.setDate(fecha.getDate() - i);
        let fechaISO = fecha.toISOString().slice(0, 10);
        
        if (fechaISO === fechaSistemaISO) {
            fechas.push(fechaISO);
        }
    }
    
    return fechas;
};

module.exports = { calcularFechasRecordatorio };