const express= require('express')
const router= express.Router()

const csurf = require('csurf')

const userController= require('../app/controler/UserController')

router.get('/',userController.user)

module.exports=router;