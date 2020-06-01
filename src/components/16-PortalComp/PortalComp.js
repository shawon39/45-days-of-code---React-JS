import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalComp extends Component {
	render() {
		return ReactDOM.createPortal(
			<div>Portal Demo</div>,
			document.getElementById("portal-root")
		);
	}
}

export default PortalComp;


// We have <div id="portal-root"></div> in Index.html