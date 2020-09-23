const { response } = require("express")
const User = require('../models/user');
exports.registerUser = (req,res,next)=>{
    const user= new User({
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        role:req.body.role
    })

    user.save().then(result=>{
        console.log(result);
        res.json({success:true})
    }
        )
        .catch(err=>console.log(err))
}
exports.performLogin = (req,res,next)=>{
    const user= {
        userName:req.body.userName,
        password:req.body.password
        
    };
    console.log(user);
    User.findOne(user)
    .then(result=>{
        if(result){
            res.json({...result._doc,success:true})
        }
        else{
            res.json({success:false})
        }
        
    })
    .catch(err=>console.log(err))
}