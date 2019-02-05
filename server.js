 var{mongoose}=require('./My BackEnd/db/config'); 
 var{Smodel}=require('./My BackEnd/model/user');
  var{Tmodel}=require('./My BackEnd/model/task');
  var{Lmodel}=require('./My BackEnd/model/title');
  var{luci}=require('./My BackEnd/model/luci');
  var{dmodel}=require('./My BackEnd/model/daytask');
 /*  var{user}=require('./My BackEnd/model/admin'); */
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
    //logout api
    app.post('/logout_admin', (req,res)=> {

        admin.findOne({"token":req.body.token}).then((result)=>{
             if (!result){return res.status(404).send();}
                 result.token = null; 
                 result.save().then(()=>{
             });
             res.status(200).send(result);    
     
         }).catch((err)=>{
             res.status(400).send(err);
         });
         });
 
       
            //reminder
 app.post('/reminder',(req,res) =>{
   
            var body=_.pick(req.body,['title','date','time']);
            console.log(body);
                var newUser = new Tmodel(body);
                console.log(newUser);
               // console.log('_id',newUser._id);
                    newUser.save().then(()=>{
                      console.log('saved');
                      res.send();

                    })
                
            });



             //Api of Addtask
    app.post('/addtask',(req,res)=>{
        // console.log('hello');
        var body = _.pick(req.body,['title','task']);
        var newUser = new luci(body);
         console.log(newUser);
         newUser.save().then(()=>{
                 console.log('saved');
                 res.send();
    
        }) 
            
    
    });
    // //Api of create new list
    app.post('/create',(req,res)=>{
        var body = _.pick(req.body,['title','task']);
         console.log(body); 
         var newUser = new Lmodel(body);
       
         newUser.save().then(()=>{
             console.log('saved');
             res.send();
    })
     });   
    
    
    
    //Add a create newlist
            /* app.post('/day',(req,res) =>{
   
                var body=_.pick(req.body,['title']);
                console.log(body);
                    var newUser = new dmodel(body);
                    console.log(newUser);
                   // console.log('_id',newUser._id);
                        newUser.save().then(()=>{
                          console.log('saved');
                          res.send();
    
                        })
                    
                }); */
                //api task
              /*   app.post('/daytask',(req,res) =>{
                    console.log('hello');
                    var body=_.pick(req.body,['title','task']);
                    console.log(body);
                        var newUser = new luci(body);
                        console.log(newUser);
                       // console.log('_id',newUser._id);
                            newUser.save().then(()=>{
                              console.log('saved');
                              res.send();
        
                            })
                        });
            //title New list
            app.post('/newlist',(req,res) =>{
   
                var body=_.pick(req.body,['title']);
                console.log(body);
                    var newUser = new Lmodel(body);
                    console.log(newUser);
                   // console.log('_id',newUser._id);
                        newUser.save().then(()=>{
                          console.log('saved');
                          res.send();
    
                        })
                    
                }); */
            //rating admin panel
            app.get('/rating', (req,res)=> {
                console.log(req.query);
                Smodel.find({}).then((result)=>{
                    res.status(200).send(result
                        );
                    //console.log(req);
                    
                }).catch((err)=>{ 
                    res.status(400).send(err);
                });
                console.log(req);
                
             });
             //api search1 newlsit
             app.get('/search1',(req,res)=>{
    
                luci.find().then((docs)=>{
                     res.send(docs)
                     console.log('done');
                 }).catch((err)=>{
                     res.status(400).send(err);
                 }) 
              
              });
             //search2 reminder
             app.get('/search2',(req,res)=>{
    
                Tmodel.find().then((docs)=>{
                     res.send(docs)
                     console.log('done');
                 }).catch((err)=>{
                     res.status(400).send(err);
                 }) 
              
              });

let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log("Listening on port " +port);
    });

