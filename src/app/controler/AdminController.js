const Course = require("../models/Course");
const Lession = require("../models/Lession");
const Quesion = require("../models/Quesion");
const News = require("../models/News")
const {mutipleMongooseToObject} = require("../../util/mongoose");
const {mogooseToObject} = require("../../util/mongoose");


class AdminController{
  admin(req, res,next){
      
  // get /admin
  Promise.all([ Course.find({}), Course.countDocumentsDeleted(),Lession.find({}),Quesion.find({}),News.find({})])
      .then(([course,coursedelete,lession, quesion, news])=>
      res.render('admin', {
        coursedelete,
        course: mutipleMongooseToObject(course),
        lession: mutipleMongooseToObject(lession),
        quesion:mutipleMongooseToObject(quesion),
        news:mutipleMongooseToObject(news),
        })
      )
      .catch(next); 

 }
 create(req, res,next){
    res.render('create');
 }

 store(req, res,next){
  const course= new Course(req.body);
  course.save()
    .then(()=> res.redirect('/admin'))
    .catch(err =>{

    });
  }
  edit(req, res,next){
    Course.findById(req.params.id)
    .then(course =>res.render('edit',{
      course:mogooseToObject(course)
    }))
    .catch(next)
 }

 update(req, res,next){
  
  Course.updateOne({_id: req.params.id},req.body)
    .then(()=> res.redirect('/admin'))
    .catch(next);
  }

  delete(req, res,next){
  
    // Course.deleteOne({_id:req.params.id})
    // .then(()=> res.redirect('back'))
    // .catch(next);
    Course.delete({_id:req.params.id})
    .then(()=> res.redirect('back'))
    .catch(next);
    }

    trash(req, res,next){
      Promise.all([ Course.findDeleted({}),Lession.find({}),Quesion.find({}),News.find({})])
      .then(([course,lession, quesion, news])=>
      res.render('trash', {
        course: mutipleMongooseToObject(course),
        lession: mutipleMongooseToObject(lession),
        quesion:mutipleMongooseToObject(quesion),
        news:mutipleMongooseToObject(news),
        })
      )
      .catch(next); 
  }

    restore(req, res, next){
      Course.restore({_id:req.params.id})
      .then(()=> res.redirect('back'))
      .catch(next);
    }
} 
module.exports= new AdminController;
