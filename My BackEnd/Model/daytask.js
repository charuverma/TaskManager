const mongoose = require('mongoose');
var daySchema =  mongoose.Schema({
   title:{type:String},
   task:{type:String}
 
 

 });
 
var dmodel = mongoose.model('dmodel', daySchema);
module.exports={dmodel};