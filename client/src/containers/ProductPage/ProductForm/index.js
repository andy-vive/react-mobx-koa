import React from 'react';
import FormEdit, {ItemEdit, Column } from 'components/FormMobx';
import { mode, itemType } from 'components/FormMobx/utils';
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
					<ItemEdit
						field={productForm.$('quantity')}
					/>
					<ItemEdit
						type={itemType.DROPDOWNLIST}
						field={productForm.$('unit')}
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