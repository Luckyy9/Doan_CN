const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');
const csrfProtection = csrf();
router.use(csrfProtection);

const homeController= require('../app/controler/HomeController')

router.get('/home', isLoggedIn, function (req, res, next) {
    res.render('home');
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/login');
});

router.use('/login', notLoggedIn, function(req, res, next) {
  next();
  
});


router.get('/register', function (req, res, next) {
    var messages = req.flash('error');
    res.render('register', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/register', passport.authenticate('local.register', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
}));

router.get('/login', function (req, res, next) {
    var messages = req.flash('error');
    res.render('login', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
router.post('/login', passport.authenticate('local.login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));
router.get('/facebook', passport.authenticate('facebook', {
        scope : 'email' }));

router.get('/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/login'
        }));

router.get('/google',
        passport.authenticate('google', { 
        scope : ['profile', 'email'] }));

router.get('/google/callback',
        passport.authenticate('google', { 
        failureRedirect: '/login' }),
function(req, res) {
    res.redirect('/');
});

router.get('/',homeController.home)
 


module.exports=router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}