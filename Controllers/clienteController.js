var cliente = require('../model/Cliente');
const { body, validationResult } = require('express-validator');

exports.post =async (req, res, next) => {
var msg = ''
var idade = 0

    if (req.body.nome === null || req.body.nome.trim() === ""){
        msg = "Nome do cliente é um campo obrigatorio !!! \n"
    }
    if (req.body.data_nascimento == null || req.body.data_nascimento.trim() === ""){
        msg += "Data de nascimento do cliente é um campo obrigatorio"
    }else{      
       idade = calculaIdade(req.body.data_nascimento)
        if (idade < 18){
            msg += "É necessario que o cliente seja maior de idade para efetuar o cadastro :("
        }
    }

    if (msg !== null && msg !== ''){
        return res.status(400).send({'resp':msg});    
    }
   
    const resultadoCreate = await cliente.create({
        codigo: req.body.codigo,
        nome: req.body.nome,        
        data_nascimento: req.body.data_nascimento,
        email: req.body.email,
    })
    res.status(201).send({'resp':"Cliente cadastrado com sucesso!"});    
};

exports.put = async (req, res, next) => {
    var id = parseInt(req.params.id);
    const cli = await cliente.findByPk(id)


    cli.codigo = req.body.codigo,
    cli.nome = req.body.nome,
    cli.data_nascimento = req.body.data_nascimento,
    cli.email = req.body.email

    const resultadoSave = await cli.save();

    console.log(resultadoSave)
   
    res.status(201).send({'resp':"Cliente alterado com sucesso!"});
};

exports.get = async (req, res, next) => {
    
    const cli = await cliente.findAll();        
    res.status(200).send(cli);
};

 function calculaIdade(data){
    var d = new Date(data)    
    var anoAniver = d.getYear() 
    var dataAtual = new Date();
    var anoAtual= dataAtual.getYear()   
    return anoAtual - anoAniver
} 


