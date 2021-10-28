const path = require('path')
const express= require('express')
const morgan = require('morgan')
const handlebars =require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const { dirname } = require('path')
const app = express()
const port = 3000

const route=require('./routes')
const db=require('./config/db')


db.connect()

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(session({secret:'mysupersecret', resave:false,saveUninitialized:false}));
app.use(morgan('combined'))

app.engine('hbs',handlebars({
  extname: '.hbs'
}))
app.set('view engine','hbs')

 app.set('views',path.join(__dirname,'resources','views'))

 route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})