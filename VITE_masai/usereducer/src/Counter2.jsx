import React ,{useReducer}from 'react'

const initialState={
    firstCounter:0,
}
const reducer =(state,action)=>{

    switch(action.type){

        case 'increment':
              return {firstCounter:state.firstCounter + action.payload}
        case 'decrement':
            return {firstCounter:state.firstCounter-action.payload}
        case 'reset':
            return {firstCounter:state.firstCounter-state.firstCounter}

        default:
            return state

    }
}
const Counter2 = () => {
 const [count,dispatch] = useReducer(reducer,initialState)
  return (
   <>
   <h1>{count.firstCounter}</h1>
   <button onClick={()=>dispatch({type:'increment',payload:1})}>Increment by 1</button>
   <button onClick={()=>dispatch({type:'increment',payload:5})}>Increment by 5</button>
   <button onClick={()=>dispatch({type:'decrement',payload:1})}>Decrement by 1</button>
   <button onClick={()=>dispatch({type:'decrement',payload:5})}>Decrement by 5</button>
   <button onClick={()=>dispatch({type:'reset',payload:0})}>Reset</button>
   </>
  )
}

export default Counter2