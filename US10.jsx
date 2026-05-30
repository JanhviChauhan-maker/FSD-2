import {useState} from 'react'
function US10(){
   const[data,setdata]=useState({})
   const hc=(e)=>{
      const{name,value}=e.target
      setdata({...data,[name]:value})
   }
   const hs=(e)=>{
       e.preventDefault()
       if(data.pwd !== data.cpwd && data.pwd.length<8){
         alert("length")}
            else{
         alert(`Welcome user ${data.fname} email ${data.email}`)
       }
      }
   
   

   return(
      <>
      <form onSubmit={hs}>
         fname:<input type='text' name='fname' onChange={hc}/>
         email:<input type='email' name='email' onChange={hc}/>
         id:<input type='text' name='id' onChange={hc}/>
         password:<input type='password' name='pwd' onChange={hc}/>
         confirm password:<input type='password' name='cpwd' onChange={hc}/>
         <input type='submit'/>
      </form>
      </>
   )
}
export default US10