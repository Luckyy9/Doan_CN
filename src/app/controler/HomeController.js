
const {mogooseToObject}= require('../../util/mongoose');
const Course = require('../models/Course');


class HomeController{
    home(rep, res,next){
        
    // get /home
   res.render('home')
   }
    
    } 
module.exports=new HomeController;

