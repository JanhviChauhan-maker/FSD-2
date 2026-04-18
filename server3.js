// src->all logical files, (../)
//  non logical files-> public folder('public')
// both in src and public folder respectively(../public)

expr=require('express')
app=expr()
path=require('path')
sp=path.join('../public')
app.use(expr.static(sp))
app.get('/ee',(req,res)=>{
   res.sendFile(sp+"/form.html")
})
app.listen(5172)
// src->this file.js
// public->a.png,index.html,style.css

expr=require('express')
app=expr()
app.use(expr.static('../public',{index:'form.html'}))
// app.get()->query
// app.post-> body(query), .urlencoded
app.get('/data',(req,res)=>{
   fname=req.query.uname
   pass=req.query.pwd
   res.send(`welcome ${fname} your password is ${pass}`)
})
app.listen(3481)

// task2
expr=require('express')
app=expr()
app.use(expr.static('../public',{index:"cal.html"}))

// app.get()->query
// app.post-> body(query), .urlencoded
app.get('/cal.html',(req,res)=>{
   var a = parseInt(req.query.a)
   var b = parseInt(req.query.b)
   if(req.query.add =="add"){
      res.send(a+b)
   }
   if(req.query.sub=="sub"){
      res.send(a-b)
   }

})
app.listen(3400)

// 

