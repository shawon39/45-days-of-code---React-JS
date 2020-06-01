import React from "react";

const FRchild = React.forwardRef((props, ref) => {
	return (
		<div>
			<input className="form-control" type="text" ref={ref} />
		</div>
	);
});

export default FRchild;
