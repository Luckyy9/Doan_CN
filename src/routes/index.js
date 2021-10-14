const homeRouter=require('./home')
const loginRouter=require('./login')
const lessionRouter=require('./lession')

function route(app){
    
    app.use('/lession',lessionRouter)
    
    app.use('/login',loginRouter)
    
    app.use('/',homeRouter)
   
  
}

module.exports=route;
