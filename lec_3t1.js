// synchronus->one by one
// whole sysem->asynchronus, individual ->synchronus
// asynchronus-> parally work
// callback()->one fun pass to another as argument executed when work of first fun completes
// seTimeout()-> after particular time-> execute
// setinterval()->Repeatedly call

const fun=function(){
   console.log("I am data")
}
setInterval(fun,5000)
