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
//register Api
app.use(bodyParser.json());
 app.post('/register',(req,res) =>{
   
            var body=_.pick(req.body,['contact','name','password','gender']);
            console.log(body);
                var newUser = new Smodel(body);
               // console.log('_id',newUser._id);
                    newUser.save().then(()=>{
                      //console.log(newUser);
                        return newUser.generateAuthToken();
                    })
                .then((token)=>{
                    res.header('x-auth',token).send(newUser);        
                })
                .catch((error)=>{
                    res.status(404).send(error);
                });
            });
    //login Api

    app.post('/login', (req, res) => {
                  
        Smodel.findOne({'contact':req.body.contact}).then( (result) => {
            console.log(result);
    
            
            if (!result) { return res.status(404).send(); }
        
            
                if(result)
                    {
                    console.log(result);
                        res.status(200).send(result);		
                    }
                else
                    { res.status(400).send(er); }
        }).catch( (err) => {
            res.status(401).send(err);
        });
     
    });
        /* app.post('/login', (req, res) => {
         res.header('confirmation', 'Checking for User');
        Smodel.findOne({'contact':req.body.contact}).then( (result) => {
         if (!result) { return res.status(404).send(); }
         bcrypt.compare(req.body.Pswd, result.password, (er, reslt) => {
        if(reslt)
                {
                     var nwToken = jwt.sign( {_id: result._id}, 'meKey' ).toString();
            
                     result.token = nwToken;
            
                    result.save().then(() => {
                   res.status(200).header('x-token', nwToken).send(result);
                                });					
                            }
                        else
                            { res.status(400).send(er); }
                    });
                }).catch( (err) => {
                    res.status(400).send(err);
                });
            }); */


let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log("Listening on port " +port);
    });

