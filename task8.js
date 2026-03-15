var test = { "division1": {

"name":["Z","B","H"]

},

"division2": {

"name" :["Y","A","G"]

}

}
v1=test.division1.name.sort()
v2=test.division2.name.sort()
console.log(v1,v2)
console.log(v1.concat(v2).sort())