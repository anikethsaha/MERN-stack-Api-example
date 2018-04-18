var mongoose = require('mongoose');
var user = new mongoose.Schema({
  _id : {
    type : mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name : {
    type : String,
    required:true,
  },
  age : {
    type : Number,


  },
  location : {
    type : String,
    required : true,
  },
  job:{
    type:String,
    required:true,
  },
  gender : {
    type : String,
    required : true,
  }
})

module.exports = mongoose.model('User',user);
