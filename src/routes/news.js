const express= require('express')
const router= express.Router();

const newsController= require('../app/controler/NewsController')

router.get('/:slug', newsController.newsmore)
router.get('/',newsController.news)

module.exports=router;