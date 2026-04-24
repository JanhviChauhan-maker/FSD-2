express=require('express')
app=express()
sess=require('express-session')
// globally use
app.use(sess({
   secret:'this is secret key',
   resave:false,
   saveUninitialized:false,
}))
app.get('/',(req,res)=>{
   if(req.session.a){
      req.session.a++
      res.send(`You visited this page ${req.session.a} times`)
   }
   else{
      req.session.a=1
      res.send('Welcome user')
   }
})
app.listen(5555,()=>{
   // console.log('server started')
})

// task
express=require('express')
app=express()
sess=require('express-session')
app.use(sess({
   secret:'this is secret key',
   resave:false,
   saveUninitialized:false,
}))
app.use(express.static('../public',{index:'form.html'}))
app.get('/savesession',(req,res)=>{
   req.session.fname=req.query.fname
   req.session.password=req.query.password
   res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
   res.send(`Welcome ${req.session.fname} 
   <a href= '/destroy'> logout</a>`)
})
app.get('/destroy',(req,res)=>{
   // destroy from server side only but connect.side remain

   // res.clearCookie('connect.sid')
   req.session.destroy()
   res.redirect('/')
})
app.listen(5557,()=>{
   // console.log('server started')
})

// task 5

express=require('express')
app=express()
sess=require('express-session')
app.use(sess({
   secret:'this is secret key',
   resave:true,
   saveUninitialized:true,
}))
app.use(express.static('../public',{index:'form.html'}))
app.get('/savesession',(req,res)=>{
   req.session.fname=req.query.fname
   req.session.password=req.query.password
   res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
   if(req.session.fname=='admin'&& req.session.password=='admin@123'){
      res.send(`Welcome ${req.session.fname}
         <a href='/destroy' > logout </a>`)}
   else{
      res.send(`Please enter valid username and password <a href ='/'>LOGIN</a>`)

   }
})
app.get('/destroy',(req,res)=>{
   // destroy from server side only but connect.side remain

   // res.clearCookie('connect.sid')
   req.session.destroy()
   res.send(`<a href ='/' > LOGIN</a>`)
})
app.listen(5559,()=>{
   console.log('server started')

})
// task 2(special)
express=require('express')
app=express()
sess=require('express-session')
app.use(sess({
   secret:'this is secret key',
   resave:true,
   saveUninitialized:true,
}))
app.use(express.static('../public',{index:'form.html'}))
app.use(express.urlencoded({extended:true}))

app.post('/logindata',(req,res)=>{
   req.session.fname1=req.body.fname1
   req.session.password=req.body.password
   res.redirect('/order.html')
})
app.post('/fetch1',(req,res)=>{
   req.session.product=req.body.product
   req.session.qty=req.body.qty
   res.redirect('/summary')
})
app.get('/summary',(req,res)=>{
   res.send(`${req.session.fname1} ${req.session.product} ${req.session.qty} <a href='/destroy' > LOGOUT </a>`)
})
app.get('/destroy',(req,res)=>{
   req.session.destroy()
   res.send(`<a href ='/' > LOGIN</a>`)
})
app.listen(5554,()=>{
   console.log('server started')

})

// https://sites.google.com/view/buildstack/home/aptitude2233
// npm i express-session
