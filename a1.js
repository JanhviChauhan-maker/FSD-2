var fs=require('fs')
// fs.mkdirSync("date-13")
fs.writeFileSync("date-13/lec1.txt","module concept")
var data4=fs.readFileSync("date-13/lec1.txt")
console.log(data4.toString())
fs.unlinkSync("date-13/lec1.txt")
console.log("ended")


