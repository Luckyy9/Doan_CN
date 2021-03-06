const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
 email:{type:String, required: true},
 password:{type:String},
 img:{type:String, default:'http://localhost:3000/img/logo_web.png'},
 name:{type:String, default:'Luck'},
 infomation:{type:String},
 uid:{type:String}
},{
    timestamps:true,
});

User.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
  };
  
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);  
  };

module.exports=mongoose.model('User',User)