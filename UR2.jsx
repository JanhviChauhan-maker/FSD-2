// import {useReducer} from 'react'
// function UR2(){
//    const[state,dispatch]=useReducer(reducer,{num1: "",num2:"",result:""})
//    function reducer(state,action){
//       if(action.type=='SET_NUM1'){
//          return { ...state, num1: action.value };
//       }
//        if(action.type=='SET_NUM2'){
//          return { ...state, num2: action.value };
//       }
//       const num1 = parseInt(state.num1)
//       const num2 = parseInt(state.num2) 
      
//       if(action.type==='addition'){
//          const result=num1+num2
//          return { ...state, result};
         
//       }
//       if(action.type==='substraction'){
//           const result=num1+num2
//         return { ...state, result };
//       }
//       if(action.type==='mul'){
//          const result=num1*num2
//         return { ...state, result};
//       }
//        if(action.type==='division'){
//          const result=num1+num2
//          return { ...state, result};
//       }
//    }
//    return(
//       <>
//       <input type='number' name='num1' value={state.num1}  onChange={(e) => dispatch({ type: "SET_NUM1", value: e.target.value })} ></input>
//       <input type='number' name='num2' value={state.num2} onChange={(e) => dispatch({ type: "SET_NUM2", value: e.target.value })} ></input>
//       <button onClick={()=>dispatch({type:'addition'})}>addition</button>
//       <button onClick={()=>dispatch({type:'substraction'})}>substraction</button>
//       <button onClick={()=>dispatch({type:'mul'})}>multiplication</button>
//       <button onClick={()=>dispatch({type:'division'})}>division</button>

//       </>
//    )
// }
// export default UR2
import { useReducer, useState } from 'react'
function UR2() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        switch (action.type) {
            case "add":
                return num1 + num2
            case "subtract":
                return num1 - num2
            case "multiply":
                return num1 * num2
            case "divide":
                return num1 / num2
            default:
                return state
        }
    }
    return (
        <div>
            <h1>Result: {result}</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={() => dispatch({ type: "add" })}>Add</button>
            <button onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
            <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
            <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
        </div>
    )
   }
export default UR2