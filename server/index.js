const express = require('express');
const {mongoURL} = require('./keys');
const bodyParser = require('body-parser');

const app = express();
const PORT = require('./config/developement.json');
const mongoose = require('mongoose');


require('./models/User');
require('./models/books');
require('./models/problem');
const requireToken = require('./middleware/requiretoken');
const userroutes = require('./router/userRoutes');
const booksroutes = require('./router/booksroutes');
const problemsroutes = require('./router/problemroutes');
app.use(bodyParser.json());

app.use(problemsroutes);
app.use('/biblio',booksroutes);
app.use('/user',userroutes);
app.use('/problem',problemsroutes);

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('connected')
})

mongoose.connection.on('error',(err)=>{
    console.log('this is error',err)
})

app.get('/',requireToken,(req,res)=>{
    res.send("your email is " + req.user.password)
})

app.listen(PORT,()=>{
    console.log("server running "+PORT.port)

})