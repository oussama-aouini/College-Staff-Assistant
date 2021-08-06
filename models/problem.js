const mongoose = require('mongoose');
const problemsschema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    salle:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
});


mongoose.model('Problem',problemsschema);