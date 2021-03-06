const path = require('path')
const express= require('express')
const morgan = require('morgan')
const handlebars =require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy
const flash = require('connect-flash')
const csrf = require('csurf')
const csrfProtection = csrf()
const bcrypt = require('bcryptjs')
const methodOverride = require('method-override')

const { dirname } = require('path')
const app = express()
const port = 3000

const { body, validationResult } = require('express-validator')

const db=require('./config/db')
require('./config/passport');


const router=require('./routes')
const Course = require('./app/models/Course')
db.connect()

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('combined'))
app.use(methodOverride('_method'))
app.engine('hbs',handlebars({
  extname: '.hbs',
  helpers:{
    iffArray(arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }, 
    forr(n, block) {
        var accum = '';
        for(var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    },
  }
}))
app.set('view engine','hbs')

app.set('views',path.join(__dirname,'resources','views'))


router(app)

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// app.get('/find/:query', cors(), function(req, res) {
//   var query = req.params.query;

//   Model.find({
//       'request': query
//   }, function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result)
//       } else {
//           res.send(JSON.stringify({
//               error : 'Error'
//           }))
//       }
//   })
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

module.exports = app;