import React, { Component } from 'react';
import ToastrContainer from 'react-toastr-basic';
import 'react-toastr-basic/styles/global.less';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div className="wrapper">
			    <ToastrContainer/>
					<Header />
					<SideBar />
			    { React.Children.toArray(this.props.children) }
				</div>	
		);
	}
};

