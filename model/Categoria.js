
const Sequelize = require('sequelize');
const database = require("../db");

//sicronizeDatabase()

const Categoria = database.define('categoria', {
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
}) 

/*async function sicronizeDatabase(){
    try {
    const resultado = await database.sync();    
    } catch (error) {
        console.log(error);
    }
}*/

module.exports = Categoria;
