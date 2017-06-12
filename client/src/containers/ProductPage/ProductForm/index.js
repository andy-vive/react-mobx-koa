import React from 'react';
import FormEdit, {ItemEdit, Column, mode} from 'components/FormMobx';
import { observer, inject } from 'mobx-react';

@inject("productForm")
@observer
export default class ProductForm extends React.Component {
	render() {
		const { productForm, onSubmit, mode } = this.props;
		return (
			<FormEdit
				mode={mode}
				title="Product Infomation"
				form={productForm}
				onSubmit={onSubmit}
			>
				<Column>
					<ItemEdit
						field={productForm.$('name')}
					/>
					<ItemEdit
						field={productForm.$('basePrice')}
					/>
				</Column>
			</FormEdit>
		);		
	}
};

ProductForm.defaultProps = {
	onSubmit: () => {},
	mode: mode.VIEW,
};