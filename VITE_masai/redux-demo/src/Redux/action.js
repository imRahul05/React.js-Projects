import { INCREMENT,DECREMENT,RESET } from "../Redux/actionTypes";
const incrementCounter = (value)=>({
  type:INCREMENT,
  payload:value,
})
const decrementCounter = (value)=>({
  type:DECREMENT,
  payload:value,
})

const reset = ()=>({
  type:RESET
})  


export {incrementCounter,decrementCounter,reset}