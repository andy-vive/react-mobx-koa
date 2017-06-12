import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SlideLeftTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';
import { mode } from 'components/FormMobx';
import ProductForm from '../ProductForm';

@observer
class CreateProduct extends Component {
	constructor(props) {
		super(props);
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
						mode={mode.CREATE}
					/>
				</div>
			</SlideLeftTransition>
		);
	}
}

export default CreateProduct;
