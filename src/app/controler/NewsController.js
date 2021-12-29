const News = require("../models/News");
const {mutipleMongooseToObject} = require("../../util/mongoose")

class NewsController{
    
  // get /news
  news(req, res,next){
    News.find({type:'news'})
    .then(news =>res.render('news', {
      news: mutipleMongooseToObject(news),
    }))
    .catch(next);
  
  }
  
  } 
module.exports= new NewsController;
