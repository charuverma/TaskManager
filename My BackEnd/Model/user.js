
'use strict';
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const _ = require('lodash'); 
var userSchema =  mongoose.Schema({
   contact:number,
   name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    tokens:String,
});

userSchema.methods.generateAuthToken = function () {
    var user=this;
    var token = jwt.sign({_id:user._id.toHexString()},'stoken').toString();
    console.log(token);
    user.tokens=token;
    console.log(token);
    return user.save().then(()=>{
        return token;
    });
};

 userSchema.pre('save',function(next){
     var user=this;
     if(user.isModified('password')){
         bcrypt.genSalt(5,(err,salt)=>{
             bcrypt.hash(user.password,salt,(err,hash)=>{
                 user.password=hash;
                 next();
             });
         });
     }else{
         next();
     }      
 });




var Smodel = mongoose.model('Smodel', userSchema);
module.exports={Smodel};
