const express = require('express');
const {Sequelize} = require('sequelize');
const router = express.Router();

  const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'dashboard',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'password',
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 34299,
      pool: {
        max: 10,
        min: 0,
        idle: 20000
      }
    }

  );

  router.use('/auth', require('./auth')(sequelize));
  router.use('/employees', require('./employees')(sequelize));
  router.use('/users', require('./users')(sequelize));
  router.use('/reports', require('./reports')(sequelize));
  router.use('/userGeneratedReports', require('./userGeneratedReports')(sequelize));
  router.use('/databases', require('./database_connections')(sequelize));
  router.use('/sequelize', require('./sequelize')(sequelize));


module.exports = router;
