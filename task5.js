var input=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
var obj={}
for(i in input){
    for(j in input[i]){
        obj[input[i][0]]=input[i][1]
    }
}
console.log(obj)