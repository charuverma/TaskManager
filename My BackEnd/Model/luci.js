const mongoose = require('mongoose');
var daySchema =  mongoose.Schema({
   title:{type:String},
   task:{type:String}
 
 

 });
 
var luci = mongoose.model('luci', daySchema);
module.exports={luci};