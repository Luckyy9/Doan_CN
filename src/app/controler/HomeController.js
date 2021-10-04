const Slide=require('../models/Slide')
const { mutipleMongooseToObject}= require('../../util/mogoose')


class HomeController{
    home(rep, res, next){
        Slide.find({})
        .then(slides => {  
         res.render('home',{
             sildes: mutipleMongooseToObject(slides)
           })
        }) 
        .catch(next)
       }  
    }            
moudel.exports=new HomeController;
