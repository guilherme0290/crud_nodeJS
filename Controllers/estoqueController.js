var estoque = require('../model/Estoque');

exports.post = async (req, res, next) => {
   
    var existe = existeProduto(req.body.produto_id)

    existe.then(function (s) {
        if (!s) {
          return  res.status(400).send({ 'resp': "Produto inexiste" });
        }
    });

    const resultadoCreate = await estoque.create({

        produto_id: req.body.produto_id,
        quantidade: req.body.quantidade,        
        preco: req.body.preco,
    })
    res.status(201).send({'resp':"Estoque criado com sucesso!"});    
};

exports.put = async (req, res, next) => {
    var id = parseInt(req.params.id);

    var existe = existeProduto(req.body.produto_id)
    existe.then(function (s) {
        if (!s) {
          return  res.status(400).send({ 'resp': "Produto inexiste" });
        }
    });

    const estoq = await estoque.findByPk(id)

    estoq.quantidade = req.body.quantidade,
    estoq.preco = req.body.preco
    estoq.produto_id = req.body.produto_id

    const resultadoSave = await estoq.save();

    console.log(resultadoSave)
   
    res.status(201).send({'resp':"Estoque alterado com sucesso!"});
};

exports.get = async (req, res, next) => {
    
    const esto = await estoque.findAll();        
    res.status(200).send(esto);
};


async function existeProduto(produto){
    var prod = require('../model/Produto');

    const produ = await prod.findOne({
        where: {
            id: produto
        }
    })

    if (produ === null) {
        return false  // nao existe produto
    }
    return true
}




