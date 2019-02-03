var mongoose=require('mongoose');
var Schema = mongoose.Schema;
const bcrypt=require('bcryptjs');


var userSchema= new Schema({
    firstname: {type:String, required:true},
    lastname:{type:String},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    mobileno:{type:Number,unique:true,required:true, minlength:10, maxlength:10,required:true},
    token:{type:String, default:null},
    rating:{type:Number,default:null}
});




userSchema.pre('save',function(next){
    var user=this;
    if(user.isModified('password')){
        bcrypt.genSalt(7,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password=hash;
                next();
            });
        });
    }else{
        next();
    }      
});

var user = mongoose.model('user',userSchema);
module.exports={user};