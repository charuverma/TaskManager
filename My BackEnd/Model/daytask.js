const mongoose = require('mongoose');
var daySchema =  mongoose.Schema({
   title:String,
   task:String,
 
 

 });
 
var dmodel = mongoose.model('dmodel', daySchema);
module.exports={dmodel};