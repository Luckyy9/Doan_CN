const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
 name:{type:String, required: true},
 titile:{type:String, required: true},
 member:{type:String, required: true},
 imformation:{type:String},
 slug:{type:String},
 type:{type:String},
 study:{type:Boolean},
 icon:{type:String},
 color:{type:String},

},{
    timestamps:true,
});


module.exports=mongoose.model('Course',Course)