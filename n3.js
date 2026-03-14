const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs=require('fs')
fs.writeFileSync("shape.txt",JSON.stringify(shape))
d=fs.readFileSync("shape.txt","utf-8")

d1=JSON.parse(d)
r1=d1[0].diameter
r2=d1[1].side
// console.log(r1)
// console.log(r2)

psquare=4*r2
pcircle=2*3.14*(r2/2)
console.log(psquare)
console.log(pcircle)

// fs.appendFileSync("shape.txt","per",pcircle)
fs.appendFileSync("shape.txt",JSON.stringify(psquare,pcircle))



