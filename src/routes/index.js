const homeRouter=require('./home')
const loginRouter=require('./login')
const lessionRouter=require('./lession')
const registerRouter=require('./register')

function route(app){
    
    app.use('/lession',lessionRouter)
    
    app.use('/login',loginRouter)

    app.use('/register',registerRouter)
    
    app.use('/',homeRouter)
   
  
}

module.exports=route;
