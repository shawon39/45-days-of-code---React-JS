import React from 'react'
import useCounter from './useCounter';

function CounterTwo() {
  const [count, increment, decrement , reset ] = useCounter(10, 10);
  return (
    <div>
      <h4>Count = {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo