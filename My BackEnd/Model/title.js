const mongoose = require('mongoose');
var titleSchema =  mongoose.Schema({
   title:String,
 
 

 });
 
var Lmodel = mongoose.model('Lmodel', titleSchema);
module.exports={Lmodel};