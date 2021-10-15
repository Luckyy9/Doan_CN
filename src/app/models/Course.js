const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
 name:{type:String},
 img:{type:String},
 createdAt:{type:Date,default:Date.now},
 updetedAt:{type:Date,default:Date.now},
});

module.exports=mongoose.model('Course',Course)