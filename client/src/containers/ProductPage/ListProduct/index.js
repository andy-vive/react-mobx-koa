import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { FadeTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';

import Products from './Products';
import { getProducts } from './actions';

import FilterForm from './FilterForm';

@inject('productStore')
@observer
class ListCategory extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { code } = this.props.params;
		getProducts({ categoryCode: code});
	}

	render() {
		const { productStore } = this.props;
		const { products } = productStore;
		return (
			<FadeTransition
				pathname="ListProduct"
			>
				<PageHeader
					title="List Product"
				/>
		    <section className="content">
		    	<FilterForm />
		    	<Products 
						products={products}
		    	/>
    		</section>
			</FadeTransition>
		)
	}
}
export default ListCategory;