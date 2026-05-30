import {useState} from 'react'

function US7(){
   const[data,setdata]=useState({})
    const[result,setresult]=useState()
   const hf=(e)=>{
      const{name,value}=e.target
      setdata({...data,[name]:value})
   }
   const add=()=>{
      setresult(parseInt(data.n1)+parseInt(data.n2))
   }
   const sub=()=>{
      setresult(parseInt(data.n1)-parseInt(data.n2))
   }
   const div=()=>{
         setresult(parseInt(data.n1)/parseInt(data.n2))
   }
   const mul=()=>{
         setresult(parseInt(data.n1)*parseInt(data.n2))

   }
   return(
      <>
      <input type='number' name='n1' onChange={hf}/>
      <input type='number' name='n2' onChange={hf}/>
      <button onClick={add}>Addition</button>
      <button onClick={sub}>Substraction</button>
      <button onClick={mul}>mul</button>
      <button onClick={div}>division</button>

      <h1>{result}</h1>
      </>
   )
}
export default US7