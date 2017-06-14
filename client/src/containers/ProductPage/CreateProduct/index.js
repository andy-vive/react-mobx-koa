import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SlideLeftTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';
import { mode } from 'components/FormMobx/utils';
import ProductForm from '../ProductForm';
import { createProduct } from '../ProductForm/actions';

@observer
class CreateProduct extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(product) {
		createProduct(this.props.params.code, product);
	}

	render() {
		return (
			<SlideLeftTransition
				pathname="CreateProduct"
			>
				<PageHeader
					title="Create Product"
				/>
				<div className="content">
					<ProductForm
						onSubmit={this.handleSubmit}
						mode={mode.CREATE}
					/>
				</div>
			</SlideLeftTransition>
		);
	}
}

export default CreateProduct;
