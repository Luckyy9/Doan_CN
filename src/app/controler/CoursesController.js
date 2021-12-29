const Course = require("../models/Course");
const CourseNew = require("../models/Course");
const {mutipleMongooseToObject} = require("../../util/mongoose")
// mongoose.Promise = global.Promise;


class CoursesController{
  courses(req, res,next){
  //   var coursesPromise = Course.find({ }).sort('name').exec();
  //   var newcoursesPromise = CourseNew.find({ type: 'toiec' }).sort('name').exec();

  //   Promise.all([coursesPromise, newcoursesPromise])
  //   .then(courses=>{ 
  //     courses = courses.map(course=> course.toObject())
  //     res.render('courses',{ courses});
  //   })
  // .catch(next);
  // get /courses
  // Promise.all(queries)
    Course.find({})
        .then(courses =>res.render('courses', {
          courses: mutipleMongooseToObject(courses),
        }))
        .catch(next);
        
      CourseNew.find({type: 'toiec'})
        .then(courses =>res.render('courses', {
          courses_toeic: mutipleMongooseToObject(courses),
        }))
      .catch(next);

 }
  
  } 
module.exports= new CoursesController;
