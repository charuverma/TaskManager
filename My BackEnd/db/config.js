var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/User");
/* var db = mongoose.connection;
console.log("connected"); */
module.exports={mongoose};
 