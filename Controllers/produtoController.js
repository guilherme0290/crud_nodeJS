
var prod = require('../model/Produto');

exports.post = async (req, res, next) => {

    const resultadoCreate = await prod.create({
        codigo: req.body.codigo,
        nome: req.body.nome,
        descricao: req.body.descricao,
        categoria_id: req.body.categoria_id

    })
    res.status(201).send({ 'resp': "Produto criado com sucesso!" });
};

exports.put = async (req, res, next) => {
    var id = parseInt(req.params.id);
    
    const produto = await prod.findByPk(id)
    //
    produto.codigo = req.body.codigo,
    produto.nome = req.body.nome
    produto.descricao = req.body.descricao
    produto.categoria_id = req.body.categoria_id

    const resultadoSave = await produto.save();

    console.log(resultadoSave)

    res.status(200).send({ 'resp': "Produto alterado com sucesso!" });
};

exports.delete = async (req, res, next) => {
    var id = parseInt(req.params.id);

    var tem = temNoEstoque(id)
    tem.then(function (s) {
        if (s) {
            res.status(400).send({ 'resp': "Este produto ainda consta no estoque, não é possivel deletar" });
        }
    });

    const produto = await prod.findByPk(id)

    if (produto !== null) {
        produto.destroy()
        res.status(200).send({ 'resp': "Produto excluido com sucesso!" });
    } else {
        res.status(404).send({ 'resp': "Produto não encontrado !" });
    }

};

exports.get = async (req, res, next) => {

    const produtos = await prod.findAll();
    res.status(200).send(produtos);
};

async function temNoEstoque(produto_id) {    
    var estoque = require('../model/Estoque');


    const produ = await estoque.findOne({
        where: {
            produto_id: produto_id
        }
    })

    if (Object.keys(produ).length === 0) {
        return false  // nao existe produto no estoque
    }

    console.log("produto:" + produ)

    return true
}




