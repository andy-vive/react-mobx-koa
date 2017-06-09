import React from 'react';
import FormEdit, {ItemEdit, Column, mode} from 'components/FormMobx';
import { observer, inject } from 'mobx-react';

@inject("categoryForm")
@observer
export default class CategoryForm extends React.Component {
	render() {
		const { categoryForm, onSubmit, mode } = this.props;
		return (
			<FormEdit
				mode={mode}
				title="Category Infomation"
				form={categoryForm}
				onSubmit={onSubmit}
			>
				<Column>
					<ItemEdit
						field={categoryForm.$('name')}
					/>
					<ItemEdit
						field={categoryForm.$('description')}
					/>
					<ItemEdit
						type="number"
						field={categoryForm.$('priceTypeI')}
					/>
					<ItemEdit
						type="number"
						field={categoryForm.$('priceTypeII')}
					/>
				</Column>
			</FormEdit>
		);		
	}
};

CategoryForm.defaultProps = {
	onSubmit: () => {},
	mode: mode.VIEW,
};