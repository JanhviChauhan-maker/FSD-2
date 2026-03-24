var url=require("url")
process.noDeprecation=true
var add="http://localhost:8080/data?name=abc&age=35#about"
var d=url.parse(add,true)

// console.log(d)
// console.log(d.protocol)
// console.log(d.search)
console.log(d.query)
console.log(d.query.name)

var add1="http://localhost:8080/data?month=march&year=2026#warupdate"
var d1=url.parse(add1,true)
leap=d1.query.year
if(leap%4==0){
   console.log("leap year")
}
else{
   console.log("not a leap year")
}
var add2="http://localhost:8080/data?T1=25&T2=23&T3=24"
// modern approach
var myurl=new URL(add2)
console.log(myurl) // np need to require
var fs=require('fs')

var d3=url.parse(add2,true)
T1=parseInt(d3.query.T1)
T2=parseInt(d3.query.T2)
var avg=(T1+T2)/2
console.log(avg)
fs.writeFileSync("avg.txt",JSON.stringify(avg))

// purpose of env
// hard, env friendly

