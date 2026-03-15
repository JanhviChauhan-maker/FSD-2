var obj=['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
var obj1={}
function transformFirstAndLast(obj){
    for(i in obj){
        obj1[obj[0]]=obj[obj.length-1]
        
    }
    console.log(obj1)
}
transformFirstAndLast(obj)

 