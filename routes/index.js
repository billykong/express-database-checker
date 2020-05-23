var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

router.get('/', async function(req, res, next) {
  const databaseDialect = process.env.DATABASE_DIALECT || 'postgres';
  const databaseHost = process.env.DATABASE_HOST;
  const databasePort = process.env.DATABASE_PORT || 5432;
  const databaseName = process.env.DATABASE_NAME;
  const databaseUsername = process.env.DATABASE_USERNAME;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const databaseConnectionString = `${databaseDialect}://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`; 
  const sequelize = new Sequelize(databaseConnectionString);
  var connected;
  try {
    await sequelize.authenticate();
    connected = true;
    console.log('Connection has been established successfully.');
  } catch (error) {
    connected = false;
    console.error('Unable to connect to the database:', error);
  }
  res.render('index', { title: 'Express', databaseConnected: connected });
});

module.exports = router;