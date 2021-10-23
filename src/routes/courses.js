const express= require('express')
const router= express.Router();

const coursesController= require('../app/controler/CoursesController')

router.get('/',coursesController.courses)


module.exports=router;