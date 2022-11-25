const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',//que base de dato te estas conectando
  logging: true,
});

setupModels(sequelize);

/* sequelize.sync(); lo dejamos ya vamos a usar migraciones*/

module.exports = sequelize;
