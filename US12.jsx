import {useState} from 'react'
function US12(){
   const[data,setdata]=useState({})
   const hc=(e)=>{
      const{name,value}=e.target
      setdata({...data,[name]:value})
   }
   const hs=(e)=>{
      e.preventDefault()
       if(data.password==data.conpassword){
         alert(`Welcome user`)
       }
       else{
         alert(`sorry!!`)

       }
   }
   return(
      <>
       <form onSubmit={hs}>
         email<input type='email' name='email' onChange={hc}/>
         password:<input type='password' name='password' onChange={hc}/>
         confirm password:<input type='password' name='conpassword' onChange={hc}/>
         <button type='submit'>submit</button>
         </form>
      </>
   )

}
export default US12