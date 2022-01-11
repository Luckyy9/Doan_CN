 const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Quesion = new Schema({
 id_course:{type:String, required: true},
 id_lession:{type:String, required:true},
 quesion:{type:String, required:true},
 answer:{type:Array, required:true},
 img:{type:String},
 number:{type:String, required:true}, 
 active:{type:Boolean, required:true, default:"false"}

},{
    timestamps:true,
});


module.exports=mongoose.model('Quesion',Quesion)