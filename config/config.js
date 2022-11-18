require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}
module.exports = { config };

/* require('dotenv').config();//llamamos el paquete qiue va a cargar todas la variables de .env en  el proces de node.

const config = {
  env: process.env.NODE_ENV || 'dev',//indicar en que entorno esat en desarrollo o produccion o si no en por defecto en dev
  port: process.env.PORT || 3000,//indica segun el puerto o si no por defecto el puerto 3000
  //todo lo que corresponde a la base de datos
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}

module.exports = { config }; */
