// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console. 
 var obj=[{"jnv":24},{"abc":34,"pqr":34}]
 var fs=require('fs')

 fs.writeFileSync("student.txt",JSON.stringify(obj))
 data=fs.readFileSync("student.txt","utf-8")
 console.log(data[0]["jnv"])
console.log(data)