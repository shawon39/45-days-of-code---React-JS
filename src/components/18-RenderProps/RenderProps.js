import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
// import User from "./User";
import Counter from "./Counter";

class RenderProps extends Component {
	render() {
		return (
			<div>
				{/* <ClickCounter/>
        <HoverCounter/>
        <User render={(isLogged) => isLogged? "Shawon" : "Guest"}/> */}
				<Counter
					render={(count, incrementCount) => (
						<ClickCounter count={count} incrementCount={incrementCount} />
					)}
				/>
				<Counter
					render={(count, incrementCount) => (
						<HoverCounter count={count} incrementCount={incrementCount} />
					)}
				/>
			</div>
		);
	}
}

export default RenderProps;
