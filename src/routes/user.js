const express= require('express')
const router= express.Router()



const userController= require('../app/controler/UserController')

router.get('/',isLoggedIn,userController.user)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}
module.exports=router;

