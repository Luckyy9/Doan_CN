const express= require('express')
const router= express.Router();

const aboutController= require('../app/controler/AboutController')

router.get('/',aboutController.about)

module.exports=router;