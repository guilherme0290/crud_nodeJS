
const Sequelize = require('sequelize');
const database = require("../db");

//sicronizeDatabase()

const Estoque = database.define('estoque', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },    
    quantidade: {
        type: Sequelize.INTEGER,        
        allowNull: false,    
    }, 
    preco: {
        type: Sequelize.DECIMAL(15,2),        
        allowNull: false,        
    },
    produto_id: {
        type: Sequelize.INTEGER,        
        allowNull: false,     
        references: {        
            model: 'Produtos',
            key: 'id'
          }   
    }, 
    
}) 

/*async function sicronizeDatabase(){
    try {
    const resultado = await database.sync();    
    } catch (error) {
        console.log(error);
    }
}*/

module.exports = Estoque;
