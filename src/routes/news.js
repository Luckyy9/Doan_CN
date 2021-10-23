const express= require('express')
const router= express.Router();

const newsController= require('../app/controler/NewsController')

router.get('/',newsController.news)


module.exports=router;