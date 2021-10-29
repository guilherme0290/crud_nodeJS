
const Sequelize = require('sequelize');
const database = require("../db");

const Venda = database.define('venda', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.INTEGER,        
        allowNull: false,        
    },
    valor: {
        type: Sequelize.DECIMAL(15,2),        
        allowNull: false,        
    }, 
    data_venda: {
        type: Sequelize.DATE,        
        allowNull: false,        
    },   
    cliente_id: {
        type: Sequelize.INTEGER,        
        allowNull: false,     
        references: {        
            model: 'Clientes',
            key: 'id'
          }   
    }, 
}) 


module.exports = Venda;
