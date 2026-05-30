import {useState} from 'react'
function US8(){
   const[task,settask]=useState("")
   const[todo,settodo]=useState([])
   const addTask=()=>{
      settodo([...todo,{id:Date.now(),name:task}])
      // it will add data not replace it
      settask("")
   }
   const deleteTask=(id)=>{
      settodo(todo.filter((task)=>task.id!==id))
   }
   return(
      <>
      <div>
         <input type='text' value={task} onChange={(e)=>{settask(e.target.value)}}/>
         <button onClick={addTask}>Add</button>
         {todo.map((t)=>(
            <div key={t.id}>
               <h3>{t.name}</h3>
               <button onClick={()=>{deleteTask(t.id)}}>Delete</button>
            </div>
         ))}
      </div>
      </>
   )
}
export default US8