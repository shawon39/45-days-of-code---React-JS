import React, { useState } from "react";

function HookCounterFour() {
	const [items, setItems] = useState([]);

	const clickHandler = () => {
		setItems([...items, {
			id: items.length,
			value: Math.floor(Math.random() * 10) + 1,
		}]);
	};

	return (
		<div>
			<button onClick={clickHandler}>Add Item</button>
			<ul className="list-group my-4">
				{items.map((item) => (
					<React.Fragment key={item.id}>
						<li className="list-group-item">{item.value}</li>
					</React.Fragment>
				))}
			</ul>
		</div>
	);
}

export default HookCounterFour;
