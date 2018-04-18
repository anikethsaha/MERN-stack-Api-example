var express = require('express');
var app = express();
app.use(express.static("."));
var path = require('path');
var bodyparser= require('body-parser');
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
      // res.json("inside this");
      if (err) {
        // console.error(err);
        res.json({
          message:"error"
        });
      }
      // console.log(data.toArray);

      res.json(data);
      });
      // data.map( d => {
      //   console.log(d);
      //   res.json(d);
      // });

    // // })
    // res.json({
    //   msg:"hello",
    //   type : true,
    // });
});

app.post('/api/user/insert',(req,res)=>{
  console.log(req.body.name);
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
