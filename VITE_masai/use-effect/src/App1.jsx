import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggleTheme } from './components/Redux/action.jsx';

const App1 = () => {
  const count = useSelector(state => state.counter.count);
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

return (
    <div className={theme}>
        <div>
            <p>{theme}</p>
            <button onClick={() => dispatch(toggleTheme())}>
                Toggle Theme
            </button>
        </div>
        
        <div>
            <h2>Counter Control</h2>
            <p>Current Count: {count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(increment(2))}>Increment By 2</button>
                <button onClick={() => dispatch(decrement(2))}>Decrement By 2</button>
            </div>
        </div>
    </div>
);
};

export default App1;