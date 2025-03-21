import React ,{useReducer}from 'react'
import {reducer} from './Redux/counterReducer'
import {incrementCounter,decrementCounter,reset} from './Redux/actions'

const initialState={
    firstCounter:0,
}

const Counter2 = () => {
 const [count,dispatch] = useReducer(reducer,initialState)
  return (
   <>
   <h1>{count.firstCounter}</h1>
   <button onClick={()=>dispatch(incrementCounter(1))}>Increment by 1</button>
   <button onClick={()=>dispatch(incrementCounter(5))}>Increment by 5</button>
   <button onClick={()=>dispatch(decrementCounter(1))}>Decrement by 1</button>
   <button onClick={()=>dispatch(decrementCounter(5))}>Decrement by 5</button>
   <button onClick={()=>dispatch(reset())}>Reset</button>
   </>
  )
}

export default Counter2