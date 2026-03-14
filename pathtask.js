var path=require('path')
var fs=require('fs')
a=path.dirname("FSD-mern/path.txt")
b=path.basename("FSD-mern/path.txt")
c=a+"/" +b
fs.mkdir(a,(err)=>{
   if(err) throw err
   console.log("Created")
   fs.writeFile(c,"some data",(err)=>{
      if(err) throw err
      console.log("written")

      fs.copyFile(c,"cpath.txt",(err)=>{
         if(err) throw err
         console.log("copied")

         // fs.unlink(c,(err)=>{
         //    if(err) throw err
         //    console.log("Deleted")
         // })

         
         

      })


   })
})
