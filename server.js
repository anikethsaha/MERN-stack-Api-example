var express = require('express');
var app = express();
app.use(express.static("."));
var path = require('path');
var bodyparser= require('body-parser');
var jwt = require('jsonwebtoken');

var server = app.listen(8080,function(d){
  console.log("server running in 8080");
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeuser');


//body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//static path
app.use(express.static(path.join(__dirname+'/public')));


//view engine and path

app.set('views' , path.join(__dirname,'public/views'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{

  res.render('index');
});


var User = require('./model/user');
app.get('/api/get/all',(req,res)=>{
    User.find({},(err,data) => {

      if (err) {

        res.json({
          message:"error"
        });
      }

      console.log(data);
      res.json(data);
      });



});
app.post('/api/get',(req,res)=>{
  console.log(req.body.name);
  User.find({name:new RegExp(req.body.name,'i')},(err,data) => {

    if (err) {

      res.json({
        message:"error"
      });
    }


    res.json(data);
    });
})


app.post('/w/login',(req,res) => {
  console.log(req.body.name);
  const userData = {
    name :req.body.name,
    password : "password"
  }
  jwt.sign({user : userData}, 'fakeuser',(err,token) =>{

    const response = {
        success: true,
        token: `Bearer ${token}`
      }
      // console.log(response.token);
    if(err){
      res.sendStatus(400);
    }

    //setting the auth header
    res.setHeader('authorization', response.token);
    res.json("success logined");
  })
});



// Checking token present or not middleware
function verifyTokenHeader(req,res,next){
  // console.log(req);
  const bearerHeader = req.headers['authorization']; // getting the bearer token
  if(typeof bearerHeader !== 'undefined'){ // checking the type
      const bearer = bearerHeader.split(' ');  //spiltting by space
      const jwtToken = bearer[1]; // extracting the token
      req.token = jwtToken; // passing the token to resuest
      next(); // passing this request waiting for next request
  }else {
    res.sendStatus(403); // forbidden
  }

}

//protected route
app.post('/w/home',verifyTokenHeader,(req,res) => {

    res.json(jwt.verify(req.token,'fakeuser',(err, data) => data ));
})



app.post('/api/user/insert',(req,res)=>{

  var user = new User();
    user.name = req.body.name;
    user.job = req.body.job;
    user.location = req.body.location;
      user.gender = req.body.gender;

    user.save((err,user) =>{
      if (err) {
        // console.error(err);
        res.json(err);
      }
      console.log(user);
      res.json(user);
    })

})
// app.get('/*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'public/views/index.ejs'));
// });
