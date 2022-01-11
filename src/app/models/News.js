const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const News = new Schema({
 name:{type:String, required: true},
 description: {type:String},
 image:{type:String},
 slug:{type:String}
},{
    timestamps:true,
});


module.exports=mongoose.model('News',News)