import {useState} from 'react'
function US13(){
   const[data,setdata]=useState({})
   const hc=(e)=>{
      const{name,value}=e.target
      setdata({...data,[name]:value})
   }
   const hs=(e)=>{
      e.preventDefault()
      alert(`Welcome ${data.fname} ${data.lname}`)
      alert(`Welcome ${data.email}`)
      alert(`Welcome ${data.password}`)
      alert(`Welcome ${data.text}`)
      alert(`Welcome ${data.gender}`)
      alert(`Welcome ${data.city}`)

   }
   return(
      <>
      <form onSubmit={hs}>
         fname:<input type='text' name='fname' onChange={hc}/>
         lname:<input type='text' name='lname' onChange={hc}/>
         email:<input type='email' name='email' onChange={hc}/>
         password:<input type='password' name='password' onChange={hc}/>
         messages<textarea name='text' onChange={hc}/>
         gender:
         <input type='radio' name='gender' value='male' onChange={hc}/>Male
         <input type='radio' name='gender' value='female' onChange={hc}/>Female
         <select name='city'>
            <option value='ahmd'>Ahmd</option>
            <option value='surat'>Surat</option>
         </select>
         <input type="submit"/>
      </form>
      </>
   )
}
export default US13