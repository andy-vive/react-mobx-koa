import React from 'react';

export default (props) => (
	<div className="panel">
			{ props.children }
	</div>
);

export const CardHeader = ({ children }) => (
	<div className="box-header" style={{ borderBottom: '1px solid #dedede'}}>
		{ children }
	</div>
);

export const CardBody = ({ children }) => (
	<div className="box-body">
		{ children }
	</div>
);

// TODO check prop types