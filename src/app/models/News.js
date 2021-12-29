const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const News = new Schema({
 name:{type:String, required: true},
 titile:{type:String, required: true},
 imformation:{type:String},
 slug:{type:String},
 type:{type:String},
 img:{type:String},
 like:{type:String},
 comment:{type:String},
 share:{type:String},
 by:{type:String},
},{
    timestamps:true,
});


module.exports=mongoose.model('News',News)