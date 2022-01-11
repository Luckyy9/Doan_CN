const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Lession = new Schema({
 name:{type:String, required: true},
 id_lession:{type:String,required:true},
 id_course:{type:String, required: true},
 active:{type:Boolean, default:"false"},
 start:{type:String, required: true},
//  quesion:{type:Array},

},{
    timestamps:true,
});


module.exports=mongoose.model('Lession',Lession)