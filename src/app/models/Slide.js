const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Slide = new Schema({
 name:{type:String},
 img_url:{type:String},
 title:{type:String}
});

module.exports=mongoose.model('Slide',Slide)
