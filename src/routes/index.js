const homeRouter=require('./home')
const adminRouter=require('./admin')
const coursesRouter=require('./courses')
const newsRouter=require('./news')
const aboutRouter=require('./about')
const userRouter=require('./user')



function route(app){

    app.use('/user',userRouter)

    app.use('/about',aboutRouter)

    app.use('/news',newsRouter)

    app.use('/courses',coursesRouter)

    app.use('/admin',adminRouter)
    
    app.use('/',homeRouter)
   
  
}

module.exports=route;
