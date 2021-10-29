
const Sequelize = require('sequelize');
const database = require("../db");

//sicronizeDatabase()

const Produto = database.define('produto', {
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
    nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },  
    descricao: {
        type: Sequelize.STRING(1024),
        allowNull: false,
    },   
    categoria_id: {
        type: Sequelize.INTEGER,        
        allowNull: false,     
        references: {         // belongsTo Company 1:1
            model: 'Categoria',
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

module.exports = Produto;
