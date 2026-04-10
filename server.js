var express=require('express')
var app=express()
app.get('/',(req,res)=>{
   res.set('content-type','text/html')
   // res.type('content-')
   res.send('<h1> Hello</h1>') // after send can use write multiple times,
   // after multiple write use send empty or only end
   // res.json()->pass object and close the conenection
   //res.sendFile()->send file(pdf,etc) directly to server
   //res.redirect()-> redirecting
   //res.render-> templates engines
})
app.listen(3000,()=>{
   console.log('server start')
})

var express=require('express')
var app=express()
app.get('/',(req,res)=>{
   let obj={name:"abc",age:34}
   //var x=JSON.stringify(obj)
   //res.write(x)
   res.send(obj.age +"")  // convert to string
   // send() will automatically convert to obj
   //res.json(obj)
   // MIME type->application/json
})
app.listen(5612)
var express=require('express')
var app=express()
app.get('/',(req,res)=>{
   res.type('text/html')
   res.send('<h1> hiiii</h1')
})
app.get('/about',(req,res)=>{
   res.type('text/html')
   res.send('<h1>About</h1>')
})
app.listen(3001)

// task1
var express=require('express')
var app=express()
var arr1=[{name:"jj",age:34},{name:"abc",age:45},{name:"qwe",age:56}]
app.get('/',(req,res)=>{
   res.type('text/html')
   res.send(arr1)
})
app.get('/sort',(req,res)=>{
   res.type('text/html')
   const v=arr1.sort((a,b)=>a.age-b.age)
   for(i of v){
      res.write(i.name+ " "  +i.age)
   }
   res.send()
})
app.listen(3005)
// req.params

// task2
var express=require('express')
var app=express()
var arr1=[{name:"jj",age:34},{name:"abc",age:45},{name:"qwe",age:56}]
app.get('/:id',(req,res)=>{
   res.write(arr1[0].name)
   res.send()
})
app.listen(4001)

var express=require('express')
var app=express()
app.get('/:id',(req,res)=>{
   res.send('user wih id ='+ JSON.stringify(req.params))
})
app.listen(4009)


var express=require('express')
var app=express()
app.get('/Flights/:from/:to',(req,res)=>{
   res.send(JSON.stringify(req.params))
})
app.listen(4006)



