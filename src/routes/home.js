const express= require('express')
const router= express.Router();

const homeController= require('../app/controler/HomeController')


router.use('/', homeController.home)


module.exports=router;