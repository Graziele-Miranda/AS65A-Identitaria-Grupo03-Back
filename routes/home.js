var express = require('express')
var router = express.Router();
var userDAO = require('../model/users')

// List
router.get('/', async (req, res) => {
    res.json({status: true, msg: 'Deu bommm'})
})

// Save
router.post('/save', async (req, res) => {
    const {nome, cpf, idade, rua, cidade, telefone, email, apoiador, doador} = req.body;

    userDAO
        .save(nome, cpf, idade, rua, cidade, telefone, email, apoiador, doador)
        .then((user) => {
            res.json({status: true, msg: "Usuario cadastrado com sucesso", user})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({status: false, msg: "Usuario não cadastrado", err})
        })
})

module.exports = router;