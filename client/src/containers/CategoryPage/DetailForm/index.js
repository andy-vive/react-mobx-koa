import React from 'react';
import FormEdit, {ItemEdit, Column} from 'components/FormMobx';
import { observer, inject } from 'mobx-react';

@inject("categoryForm")
@observer
export default class extends React.Component {
	render() {
		const { categoryForm } = this.props;
		return (
			<FormEdit
				edit
				title="Category Infomation"
				form={categoryForm}
				onSubmit={(data) => {
					console.log(data)
				}}
			>
				<Column>
					<ItemEdit
						field={categoryForm.$('name')}
					/>
					<ItemEdit
						field={categoryForm.$('description')}
					/>
					<ItemEdit
						field={categoryForm.$('priceTypeI')}
					/>
					<ItemEdit
						field={categoryForm.$('priceTypeI')}
					/>
				</Column>
			</FormEdit>
		);		
	}
};