path=require('path')
a=path.dirname("D:/date-13/hello.txt")
console.log(a)
b=path.basename("D:/date-13/hello.txt")
console.log(b)
c=path.extname("D:/date-13/hello.txt")
console.log(c)
d=path.parse("D:/date-13/hello.txt")
console.log(d)
if(d.ext==".txt"){
   console.log("text file")
}
else{
   console.log("not a text file")
}


