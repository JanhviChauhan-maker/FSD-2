var obj={data:{a:15,b:20,c:[40,30]}}

var fs=require('fs')
fs.writeFileSync("input.txt",JSON.stringify(obj))

data=fs.readFileSync("input.txt","utf-8")
q=JSON.parse(data)
a1=q.data.a
b1=q.data.b
z=a1+b1
console.log(a1+b1)

c1=q.data.c[1]
z2=c1-b1
console.log(c1-b1)
mul=q.data.c[0]*q.data.c[1]
console.log(mul)

fs.appendFileSync("input.txt",JSON.stringify(z))
fs.appendFileSync("input.txt",JSON.stringify(",",z2))
