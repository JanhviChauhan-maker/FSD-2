import {useState} from 'react'
function US6(){
   const[data,setdata]=useState({})
   const hf=(e)=>{
      const{name,value}=e.target
      setdata({...data,[name]:value})
   }
   return(
      <>
      <input type='text' name='fname' onChange={hf}/>
      <input type='text' name='lname' onChange={hf}/>
      <h1>firstname:{data.fname}</h1>
      <h1>lastname:{data.lname}</h1>
      </>
   )
}
export default US6