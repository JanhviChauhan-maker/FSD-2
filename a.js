// if sync-> dont use callback()
// writeFileSync(filename,data)

// writeFile(fname, data,CB)
// readile, copy,append,unlink,mkdir, rmdir

// work synchronously
var fs=require('fs')
fs.writeFileSync("hello.txt","Good Morning")
// fs.appendFileSync("hii.txt","\nIt is warm day")
// var data= fs.readFileSync("hello.txt")
console.log(data)  // buffer data(hex)
console.log(data.toString())
 var dat1=fs.readFileSync("hello.txt","utf-8")
 console.log(dat1)
fs.renameSync('hello.txt','abc.txt')
fs.unlinkSync('abc.txt') // for deletion
console.log("abc.txt")



