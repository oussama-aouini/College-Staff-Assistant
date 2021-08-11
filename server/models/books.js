const mongoose = require('mongoose');
const booksschema = mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    nombre:{
        type:Number,
        required:true
    }
});


mongoose.model('books',booksschema);