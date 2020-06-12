import { useState } from "react";

function useCounter(initialValue = 0, value) {
	const [count, setCounter] = useState(initialValue);
	const increment = () => {
		setCounter(count + value);
	};
	const decrement = () => {
		setCounter(count - value);
	};
	const reset = () => {
		setCounter(initialValue);
  };
  
  return [count, increment, decrement, reset];
}

export default useCounter;
