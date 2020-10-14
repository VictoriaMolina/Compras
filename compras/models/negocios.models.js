const mongoose = require('mongoose');

const negocioSchema = new mongoose.Schema({

    /*latitud: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },*/
    ciudad:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: false
    }
});

const Negocios = mongoose.model('Negocio', negocioSchema);

module.exports = {
    Negocios
};