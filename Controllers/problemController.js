const mongoose = require('mongoose');
const Problem = mongoose.model('Problem');



module.exports.ajoutproblem = async (req,res)=>{
    
    const {email,salle,type} = req.body;

    try{
      const user = new Problem({email,salle,type});
      await  user.save();

    }catch(err){
      return res.status(422).send(err.message)
    }
    
}

module.exports.problemlist = async (req, res) => {
    Problem.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    }).select("type")
}