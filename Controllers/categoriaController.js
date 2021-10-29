


var cat = require('../model/Categoria');

exports.post = async (req, res, next) => {
   
    const resultadoCreate = await cat.create({
        codigo: req.body.codigo,
        nome: req.body.nome        
    })
    res.status(201).send({'resp':"Categoria criada com sucesso!"});    
};

exports.put = async (req, res, next) => {
    var id = parseInt(req.params.id);
    const categoria = await cat.findByPk(id)

    categoria.codigo = req.body.codigo,
    categoria.nome = req.body.nome

    const resultadoSave = await categoria.save();

    console.log(resultadoSave)
   
    res.status(201).send({'resp':"Categoria alterada com sucesso!"});
};


