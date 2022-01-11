const Course = require("../models/Course");
const Lession = require("../models/Lession");
const Quesion = require("../models/Quesion");
const {mutipleMongooseToObject} = require("../../util/mongoose")
const {mogooseToObject} = require("../../util/mongoose");
const { db } = require("../models/Course");


class CoursesController{
  courses(req, res,next){
  
    Promise.all([ Course.find({}),Course.find({}).limit(2),Quesion.find({})])
      .then(([courses,coursesnew, quesion])=>
      res.render('courses', {
        courses: mutipleMongooseToObject(courses),
        coursesnew: mutipleMongooseToObject(coursesnew),
        quesion:mutipleMongooseToObject(quesion),
        })
      )
      .catch(next); 
        
    // Course.find({})
    //     .then(courses =>res.render('courses', {
    //       courses: mutipleMongooseToObject(courses),
    //     }))
    //     .catch(next);
    // CourseNew.find({type:'toeic'})
    //     .then(coursesnew =>res.render('courses', {
    //       coursesnew: mutipleMongooseToObject(coursesnew),
    //     }))
    //     .catch(next);   
       

   }
    lession(req, res,next){
            
      // get /lession
      Promise.all([ Lession.find({}), Quesion.find({})])
      .then(([lession,quesion])=>
      res.render('lession', {
        lession: mutipleMongooseToObject(lession),
        quesion:mutipleMongooseToObject(quesion),
        

        })
      )
      .catch(next); 

      // Course.find({'courses.lessions': {}})
      //     .then(lession =>res.render('lession', {
      //       lession: mutipleMongooseToObject(lession),
      //     }))
      //     .catch(next);

      // db.collection('lessions').aggregate([{
      //   $lookup:{
      //     from:'courses',
      //     localField: 'id_course',
      //     foreignField: 'id_course',
      //     as: 'lession',
      //     // let: {id_couse:"$_id"},
      //     // pipeline:[
      //     //   {$match:{$expr:{$eq:['$id_course','$$id_course']}}}
      //     // ]
      //   }
      // },
      // { $unwind:"$LessionCourse"}]).toArray(function(err, res) {
      //   if (err) throw err;
      //   console.log(JSON.stringify(res)); });
      // .find({})
      //   .then(lession=> res.render('lession',{
      //     lession:mutipleMongooseToObject(lession),
      //   }))
      //   .catch(next);
      // Lession.find({r})
      //   .then(lession => res.render('lession',{
      //     lession:mutipleMongooseToObject(lession),
      //   }))
      //   .catch(next);
       
    }
  
  } 
module.exports= new CoursesController;
