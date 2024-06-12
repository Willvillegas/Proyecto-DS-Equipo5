const moment = require('moment-timezone');

let serverTime = moment().tz('America/Costa_Rica');

const getServerTime = () => {
  return serverTime.format('YYYY-MM-DD HH:mm:ss');
};

const updateServerTime = () => {
  serverTime.add(1, 'second');
};

// Permite cambiar la fecha y hora del servidor
const setServerTime = (newTime) => {
  serverTime = moment(newTime).tz('America/Costa_Rica');
};

// Actualiza la hora del servidor cada segundo
setInterval(updateServerTime, 1000);

module.exports = {
  getServerTime,
  setServerTime
};
