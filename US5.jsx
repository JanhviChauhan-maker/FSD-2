import {useState} from 'react'
function US5(){
   const[obj,setobj]=useState({brand:'BMW',model:"M4",color:"titan grey",year:'2000'})
   const hs=()=>{
      // setobj({brand:'audi',model:"Q5",color:"perl silver",year:'2025'})
    if(obj.brand=="BMW"){
      setobj({brand:'audi',model:"Q5",color:"perl silver",year:'2025'})
    }
   else{
      setobj({brand:'BMW',model:"M4",color:"titan grey",year:'2000'})
  }
}
   return(
      <>
      <h1>My {obj.brand}. It is  a {obj.color} {obj.model} from {obj.year}.</h1>
      <button onClick={hs}>Click me</button>
      </>
   )
}
export default US5