const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Course = new Schema({
 name:{type:String, required: true},
 titile:{type:String, required: true},
 member:{type:String, required: true, default:"0"},
 information:{type:String},
 slug:{type:String,slug:'titile'},
 type:{type:String},
 study:{type:Boolean, default:"false"},
 icon:{type:String, default:"fas fa-dice-d20"},
 color:{type:String, default:"bg-color-violet"},

 lessions:[{
     id_lession:{type:String, require:true},
     name_lession:{type:String, require:true},
     star:{type:String,require:true},
     active:{type:Boolean, require:true, default:false},
     quesions:{
         id_quesion:{type:String, require:true},
         quesion:{type:String, require:true},
         answer:{type:String, require:true},
         active_Q:{type:Boolean, require:true, default:false}
     }
 }],
 
},{
    timestamps:true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ overrideMethods: 'all' ,deletedAt : true});

module.exports=mongoose.model('Course',Course)