import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App1 = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default App1
