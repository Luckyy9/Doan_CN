const News = require("../models/News");
const {mogooseToObject} = require("../../util/mongoose")
const {mutipleMongooseToObject} = require("../../util/mongoose")
class NewsController{
  
    
  // get /news
  news(req, res,next)
  {
    News.find({type:'news'})
    .then(news =>res.render('news', {
      news: mutipleMongooseToObject(news),
    }))
    .catch(next);
  
  }
  
  newsmore(req, res,next)
  {
    News.findOne({ slug: req.params.slug })
      .then(news =>
        res.render('newsmore', {
          news: mogooseToObject(news),
        })
      )
    .catch(next);
  }  
} 
module.exports= new NewsController;
