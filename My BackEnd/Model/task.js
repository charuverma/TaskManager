const mongoose = require('mongoose');
var taskSchema =  mongoose.Schema({
   title:String,
   date:String,
   time:String 
 

 });
 
var Tmodel = mongoose.model('Tmodel', taskSchema);
module.exports={Tmodel};
