const Slide = require('../models/Slide');
const {mogooseToObject}= require('../../util/mogoose');
const Course = require('../models/Course');


class HomeController{
    home(rep, res,next){
        
    // get /new
    Slide.findOne({})
    .then(slide => {  
     res.render('home',{                
         slide: mogooseToObject(slide)
       })
    })
    .catch(next)

   }
    
    } 
module.exports=new HomeController;

