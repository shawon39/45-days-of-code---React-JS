import React, { useContext } from "react";
import UserContext from "./myContext";

function CComponent() {
	const user = useContext(UserContext); // Consuming here

	return (
		<div>
			<p>Consuming value : {user}</p>
			Component C is here !
		</div>
	);
}

export default CComponent;
