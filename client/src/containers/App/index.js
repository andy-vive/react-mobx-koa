import React, { Component } from 'react';
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="wrapper">
		    { React.Children.toArray(this.props.children) }
			</div>
		)
	}
}

