
const Sequelize = require('sequelize');
const database = require("../db");

//sicronizeDatabase()
//
const Cliente = database.define('cliente', {
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
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
    }, 
    email: {
        type: Sequelize.STRING(32),
        allowNull: true,
    },     
}) 

/*async function sicronizeDatabase(){
    try {
    const resultado = await database.sync();    
    } catch (error) {
        console.log(error);
    }
}*/

module.exports = Cliente;
