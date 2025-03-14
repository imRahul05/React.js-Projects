// import React from 'react'
// import {useState,useReducer,useEffect} from 'react'


// const reducer =(state,action)=>{
//   //return newState --> based on action
//   //action - increment, decrement, reset 
//   switch(action){

//     case 'increment':
//         return state+1
//     case 'decrement':
//       return state-1
//     case 'reset':
//       return initialState
//     default:
//       return state;
//   }
// }

// const Counter = () => {
//   //   //const [count,setCount] = useState(0)
//   //   //arr.reduce(reducer,initialValue)

//   //   // let arr = [10,20,20,30]
//   //   // const reducer = (acc,ele)=>acc+ele
//   //   // let initialValue = 0
//   //   // const res = arr.reduce(reducer,initialValue)
//   //   // console.log(res)

   
//   //   console.log(useReducer())
//   //   useReducer(reducer,initialState)
//    const [count,dispatch]= useReducer(reducer,initialState)
// //dispatch ("increment ")-> newState =1

  
//   return (
//    <>
//   <h1>{count}</h1>
//    <button onClick={()=>dispatch("increment")}>Increment</button>
//    <button onClick={()=>dispatch("decrement")}>Decrement</button>
//    <button onClick={()=>dispatch("reset")}>Reset</button>
//    </>
//   )
// }

// export default Counter


import React,{useReducer} from 'react'


const initialState ={
  firstCounter:0,
}
const reducer =(state,action)=>{
   console.log(action)
  switch(action.type){
     case  "increment" :
      return {firstCounter:state.firstCounter+action.payload};
      case 'decrement':
        return {firstCounter:state.firstCounter-action.payload}
    case 'reset':
      return initialState
      default:
        return state
  }
}


const Counter = () => {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
   <>
   <h1>{count.firstCounter}</h1>
   <button onClick={()=>dispatch({type:"increment",payload:1})}>Increment by 1</button>
   <button onClick={()=>dispatch({type:'decrement',payload:1})}>Decrement by 1</button>
   <button onClick={()=>dispatch({type:"increment",payload:5})}>Increment by 5</button>
   <button onClick={()=>dispatch({type:'decrement',payload:5})}>Decrement by 5</button>
   <button onClick={()=>dispatch({type:"increment",payload:10})}>Increment by 10</button>
   <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement by 10</button>
   <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
   </>
  )
}

export default Counter