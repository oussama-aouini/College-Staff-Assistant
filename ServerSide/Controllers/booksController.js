const mongoose = require('mongoose');
const books = mongoose.model('books');


module.exports.ajoutlivre = async (req,res)=>{
    
    const {title,author,nombre} = req.body;

    try{
      const book = new books({title,author,nombre});
      await  book.save();
      res.send('posted')

    }catch(err){
      return res.status(422).send(err.message)
    }
    
}

module.exports.listlivre = (req, res) => {
    books.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    })
}

