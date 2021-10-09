const express= require('express')
const router= express.Router();

const loginController= require('../app/controler/LoginController')


router.use('/login', loginController.login)


module.exports=router;