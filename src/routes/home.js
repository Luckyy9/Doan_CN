const express= require('express')
const router= express.Router();

const homeController= require('../app/controler/HomeController')

router.get('/', homeController.home)


module.exports=router;