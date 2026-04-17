var express=require('express')
var app=express()
// search,filter->get
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   res.send(`<form action= "/data" method="get"> 
      username:<input type='text' name= 'uname'>
      <input type="submit"></form>`)
})
app.get('/data',(req,res)=>{
      uname=req.query.uname
      res.send(`Welcome ${uname}`)
   })
app.listen(5623,()=>{
   console.log('Server started')
})

// middleware
// encoded,auth.,  route->CRUD
// functionality will drag to subsequnet part of url also->app.use()
var express=require('express')
var app=express()
const a=(req,res,next)=>{
   req.uname='abc'
   console.log('uname insert')
   next()
}
const b=(req,res,next)=>{
   req.mark=20+3
   console.log('mark updates')
   next()
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
   res.send("username "+req.uname+" updated mark "+req.mark)

})
app.get("/data/a",(req,res)=>{
   res.send("only username through middleware ="+req.uname)
})
app.listen(6007)

// task1
var express=require('express')
var app=express()

const entryLog = (req, res, next) => {
console.log("Student entered campus");
next();
};
var boo=true
const checkID = (req, res, next) => {
   const hasID = true; // change to false to test
   if (hasID) {
   req.student = "A"; // add student name
   console.log("ID verified");
   next();
   } 
   else {
res.send("Access Denied: No ID Card");
}
};
app.use("/class", entryLog, checkID);
app.get("/class/data", (req, res) => {
res.send(`Welcome ${req.student} to the class`);
});
app.listen(3000, () => {console.log("Server running on port 3000");});

// task 11
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   res.send(`<form action= "/data" method="post"> 
      username:<input type='text' name= 'uname'>
      password:<input type='password' name='pass'>
      <input type="submit"></form>`)
})
app.post('/data',(req, res, next) => {
      if(req.body.uname=="admin"&& req.body.pass=="1234"){
         console.log("Login")
         next()
      }
      else{
         res.send("nooo")
         console.log("Login denied")
      }
})
// app.use("/validity", name);
app.post("/data", (req, res) => {
    res.send("Login Successful");
});
app.listen(4000)

// image task
expr=require('express')
app=expr()
app.use(expr.static('./'))
app.listen(5678,()=>{
   console.log('server on')
})


// index.html
/* <link href="style.css" rel="stylesheet"> */
//    <p class="a">I m index</p>

// style.css
// .a{
   // color:tomato;
   // font-size:100
// }


