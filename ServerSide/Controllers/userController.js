const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {jwtkey} = require('../keys');
const User = mongoose.model('User');

module.exports.register = async (req,res)=>{
    
    const {name,email,password} = req.body;

    try{
      const user = new User({name,email,password});
      await  user.save();
      res.send(user)
      //const token = jwt.sign({userId:user._id},jwtkey)
     // res.send({token});

    }catch(err){
      return res.status(422).send(err.message)
    }
    
}

module.exports.login = async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }

}