// https-> to create server
const http=require('http')
http.createServer((req,res)=>{
   obj={"name":"abc","age":45}
   res.writeHead(200,{"content-type":"application/json"})
   res.writeHead(200,{"content-type":"text/html"}) // going to read as per the rules
 res.write("<h1> hello</h1>")
   res.end(JSON.stringify(obj))
   // res.end("hii")
   res.write("how are u")
  
}).listen(5678,()=>{
   console.log("server connected")
})