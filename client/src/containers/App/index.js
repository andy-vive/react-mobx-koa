import React from 'react';

export default (props) => (
	<div className="wrapper">
    { React.Children.toArray(props.children) }
	</div>
);