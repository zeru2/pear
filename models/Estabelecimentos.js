import mongoose from 'mongoose';

const EstabelecimentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }, 

    latitude: {
        type: String,
        required: true
    },

    longitude:{
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true
    },

    consulta: { //site para consultar, se nao houver  mesmo do telefone
        type: String,
        required: true
    },

});

const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema );
module.exports = Estabelecimento;