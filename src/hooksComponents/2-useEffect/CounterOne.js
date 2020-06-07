import React, { useState, useEffect } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

	useEffect(() => {
    console.log('Inside useEffect');
		document.title = `You click ${count} times`;
	},[count]);

	return (
		<div>
      <p>Name: {name}</p>
      <input onChange={(e) => setName(e.target.value)} type="text"/>
			<button onClick={() => setCount(count + 1)}>Counter: {count}</button>
		</div>
	);
}

export default CounterOne;
