const mongoose = require('mongoose');
var daySchema =  mongoose.Schema({
   title:String,
 
 

 });
 
var dmodel = mongoose.model('dmodel', daySchema);
module.exports={dmodel};