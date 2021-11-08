const passport = require('passport')
const User = require('../app/models/User')
const LocalStrategy = require('passport-local').Strategy
const facebookStrategy = require('passport-facebook').Strategy
const { body, validationResult } = require('express-validator')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Register
passport.use('local.register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    body('email').isEmail()
    body('password').isLength({ min: 5 })
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    User.findOne({'email': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Tài khoản đã tồn tại'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {
           if (err) {
               return done(err);
           }
           return done(null, newUser);
        });
    });
}));

// Login
passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    body('username').isEmail()
    body('password').isLength({ min: 5 })
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    User.findOne({'email': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'Tài khoản không tồn tại!'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Mật khẩu không chính xác!'});
        }
        return done(null, user);
    });
}));

// passport FACEBOOK
passport.use(new facebookStrategy({

    clientID        : "579123353288153",
    clientSecret    : "4b2fd7be7f55dc0609f920669283e15b",
    callbackURL     : "http://localhost:3000/facebook/callback",
    profileFields   : ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']
},function(token, refreshToken, profile, done) {
    process.nextTick(function() {
        User.findOne({ 'uid' : profile.id }, function(err, user) {
            if (err)
                return done(err);

            if (user) {
                console.log("user found")
                console.log(user)
                return done(null, user); 
            } else {
                var newUser = new User();
                newUser.uid = profile.id
                newUser.name  = profile.name.givenName + ' ' + profile.name.familyName
                newUser.email = profile.emails[0].value
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });

    })

}));

// passport GOOGLE
passport.use(new GoogleStrategy({
    clientID: "231634116880-bhgq7i30in4hk7jjqlb8i3kor9j307em.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },function(token, refreshToken, profile, done) {
    process.nextTick(function() {
        User.findOne({ 'uid' : profile.id }, function(err, user) {
            if (err)
                return done(err);

            if (user) {
                console.log("user found")
                console.log(user)
                return done(null, user); 
            } else {
                var newUser = new User();
                newUser.uid = profile.id
                newUser.name  = profile.name.givenName + ' ' + profile.name.familyName
                newUser.email = profile.emails[0].value
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });

    })

}));