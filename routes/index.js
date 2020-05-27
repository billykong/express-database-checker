var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

router.get('/', async function(req, res, next) {
  // console.log(process.env);
  const databaseDialect = process.env.DATABASE_DIALECT || 'postgres';
  const databaseHost = process.env.DATABASE_HOST;
  const databasePort = process.env.DATABASE_PORT || 5432;
  const databaseName = process.env.DATABASE_NAME;
  const databaseUsername = process.env.DATABASE_USERNAME;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const databaseConnectionString = `${databaseDialect}://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`; 
  const databaseTimeout = process.env.DATABASE_TIMEOUT || 5000;
  const sequelize = new Sequelize(databaseConnectionString);

  try {
    Promise.race([
      new Promise((done, _) => {
        sequelize.authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
          res.render('index', { title: 'Express Database Checker', databaseConnected: true });
        })
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), databaseTimeout))
    ]).catch((error) => {
      if(!res.headersSent) {
        console.error('Unable to connect to the database:', error);
        res.render('index', { title: 'Express Database Checker', databaseConnected: false });
      }
    });
  } catch (error) {
    console.error('Error on timeout racing:', error);
  }
});

module.exports = router;
