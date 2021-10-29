var venda = require('../model/Venda');
var cli = require('../model/Cliente');

exports.post = async (req, res, next) => {

    var existe = existeCliente(req.body.cliente_id)
    existe.then(function (s) {
        if (!s) {
          return  res.status(400).send({ 'resp': "Cliente inexiste" });
        }
    });
   
    const resultadoCreate = await venda.create({
        codigo: req.body.codigo,
        valor: req.body.valor,        
        data_venda: req.body.data_venda,
        cliente_id: req.body.cliente_id,
    })
    res.status(201).send({'resp':"Venda criada com sucesso!"});    
};

exports.put = async (req, res, next) => {
    var id = parseInt(req.params.id);

    var existe = existeCliente(req.body.cliente_id)

    existe.then(function (s) {
        if (!s) {
          return  res.status(400).send({ 'resp': "Cliente inexiste" });
        }
    });


    const ve = await venda.findByPk(id)

    ve.codigo = req.body.codigo,
    ve.valor = req.body.valor
    ve.data_venda = req.body.data_venda
    ve.cliente_id = req.body.cliente_id

    const resultadoSave = await ve.save();

    console.log(resultadoSave)
   
    res.status(200).send({'resp':"Venda alterada com sucesso!"});
};

exports.get = async (req, res, next) => {
    
    const vendas = await venda.findAll();        
    res.status(200).send(vendas);
};


async function existeCliente(cliente){    

    const cl = await cli.findOne({
        where: {
            id: cliente
        }
    })

    if (cl === null) {
        return false  // nao existe cliente
    }
    return true
}


