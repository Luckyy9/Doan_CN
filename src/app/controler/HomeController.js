const Course = require("../models/Course");
const {mutipleMongooseToObject} = require("../../util/mongoose")

var CourseStudy= Course;
class HomeController{
  home(req, res,next){
      Course.find({})
      .then(courses =>res.render('home', {
        courses: mutipleMongooseToObject(courses),
      }))
      .catch(next);
    }
//  Course.find({study: true})
//  .then(courses =>res.render('home', {
//    courses_study: mutipleMongooseToObject(courses)
//  }))
//  .catch(next);
} 
module.exports= new HomeController;
