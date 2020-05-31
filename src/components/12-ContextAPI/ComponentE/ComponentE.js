import React, { Component } from "react";
import ComponentF from "../ComponentF/ComponentF";
import UserContext from './../userContext'; //  For contextType way

class ComponentE extends Component {

  // Alternative of ( ComponentE.contextType = UserContext; )
  // static contextType = UserContext;

	render() {
		return (
			<div>
        <p>Using Context Type = {this.context}</p> 
				<ComponentF />
			</div>
		);
	}
}

ComponentE.contextType = UserContext; // Another way to showing Context Value

export default ComponentE;
