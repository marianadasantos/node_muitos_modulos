//isso é o modelo e será reaproveitado

const mongoose = require('mongoose')

const Produto = mongoose.model('produtos', {
    //por ser um schema, tenhi q falar o tipo de info de img
    img: String,
    nomeItem: String,
    tamanhoItem: String,
    precoItem: Number,
    estoque: Number,
    quantidade: Number
})

module.exports = Produto