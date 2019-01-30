 var{mongoose}=require('./My BackEnd/db/config'); 
 var{Smodel}=require('./My BackEnd/model/user');
var express = require('express');
var bodyParser = require('body-parser');
 const bcrypt=require('bcryptjs'); 
 const _=require('lodash');

var app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers',"Origin,x-auth,X-Requested-With,Content-Type,Accept");
  res.setHeader('Access-Control-Expose-Headers',"x-auth"); 
    next();
});
app.use(bodyParser.json());

//register api
 app.post('/register',(req,res) =>{
   // console.log(req.body);
    /* var myData= new Smodel(req.body);
    myData.save().then((result) =>{
            res.status(200).send(JSON.stringify('Item Saved to database'));
        }).catch((err) =>{
            console.log(err);
                res.status(400).send(JSON.stringify('Item not saved to database'));
            });  */
            var body=_.pick(req.body,['contact','name','password','Gender']);
            //console.log(body);
                var newUser = new Smodel(body);
                //console.log('id',newUser._id);
                    newUser.save().then(()=>{
                       // console.log(newUser);
                        return newUser.generateAuthToken();
                    })
                   

                .then((token)=>{
                    res.header('x-auth',token).send(newUser);        
                })
                .catch((error)=>{
                    res.status(404).send(error);
                });
            });

//add songs
/* app.post('/addsong',(req,res)=>{
    console.log(req.body);
    var data=new song(req.body);
    data.save().then((result) =>{
        res.status(200).send(JSON.stringify('song save sucessfully'));
        console.log("song save");
    }).catch((err) =>{
        console.log(err);
            res.status(400).send(JSON.stringify('song not saved'));
         });

});
 */


let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log("Listening on port " +port);
    });

