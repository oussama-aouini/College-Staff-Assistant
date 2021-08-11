const mongoose = require('mongoose');
const empruntsschema = mongoose.Schema({
    Qrcode:{
        type:String,
        unique:true,
        required:true
    },
    barreCode:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});


mongoose.model('emprunt',empruntsschema);