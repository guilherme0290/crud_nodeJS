const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste_multicoisas', 'root', 'gui4096990140', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;