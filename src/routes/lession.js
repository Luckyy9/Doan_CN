const express= require('express')
const router= express.Router();

const lessionController= require('../app/controler/LessionController')


router.use('/', lessionController.lession)


module.exports=router;