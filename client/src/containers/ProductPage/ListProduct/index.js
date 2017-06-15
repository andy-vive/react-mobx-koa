import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { FadeTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';

@observer
class ListCategory extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<FadeTransition
				pathname="ListProduct"
			>
				<PageHeader
					title="List Product"
				/>
		    <section className="content">
    		</section>
			</FadeTransition>
		)
	}
}
export default ListCategory;