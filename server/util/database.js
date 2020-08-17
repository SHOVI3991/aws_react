const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize('aws_react',
'admin','mysql2020',{
    dialect: 'mysql',
    host: 'oes.clxzvtghbuze.ap-south-1.rds.amazonaws.com',
    port: 3306
});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  }).finally(() => {
    sequelize.close();
  });
module.exports = sequelize;