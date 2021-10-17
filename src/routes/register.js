const express= require('express')
const router= express.Router();

const loginController= require('../app/controler/RegisterController')


router.use('/', loginController.register)


module.exports=router;