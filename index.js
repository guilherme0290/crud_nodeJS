const express = require('express'); 
const server = express();
const database = require("./db");
const catController = require('./Controllers/categoriaController')
const produtoController = require('./Controllers/produtoController')
const estoqueController = require('./Controllers/estoqueController')
const clienteController = require('./Controllers/clienteController')
const vendaController = require('./Controllers/vendaController')

//configurando o body parser para pegar POSTS 
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.listen(3000);

// sincroniza o banco de dados, se tiver tabelas que ainda nao existe, ira criar
sicronizeDatabase()

// Rotas para categoria
server.post('/inserir_categoria', catController.post);
server.put('/alterar_categoria/:id', catController.put);

//Rotas para produto
server.post('/inserir_produto',produtoController.post)
server.put('/alterar_produto/:id',produtoController.put)
server.delete('/deletar_produto/:id',produtoController.delete)
server.get('/produtos',produtoController.get)

//Rotas para estoque
server.post('/inserir_estoque',estoqueController.post)
server.put('/alterar_estoque/:id',estoqueController.put)
server.get('/estoque',estoqueController.get)

//Rotas para cliente
server.post('/inserir_cliente',clienteController.post)
server.put('/alterar_cliente/:id',clienteController.put)
server.get('/clientes',clienteController.get)

//Rotas para venda
server.post('/inserir_venda',vendaController.post)
server.put('/alterar_venda/:id',vendaController.put)
server.get('/vendas',vendaController.get)



async function sicronizeDatabase(){
    try {
    const resultado = await database.sync();    
    } catch (error) {
        console.log(error);
    }
}










