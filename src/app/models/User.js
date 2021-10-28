const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
 email:{type:email, required: true},
 password:{type:password, required: true},
 img:{type:String},
 name:{type:String},
 infomation:{type:String},
 id_user:{type:String, required: true}
});

module.exports=mongoose.model('User',User)