import React from 'react';
import { observer, inject } from 'mobx-react';
import { debounce } from 'lodash';
import FormEdit, {ItemEdit, Column } from 'components/FormMobx';
import { mode, itemType } from 'components/FormMobx/utils';

@inject('productFilter')
@observer
export default class FilterForm extends React.Component {
	render() {
		const { productFilter, onSubmit } = this.props;
		const handleChangeCategory = debounce((e) => {
			
		}, 200);
		return (
			<FormEdit
				mode={mode.FILTER}
				title="Filter"
				form={productFilter}
				onSubmit={onSubmit}
			>
				<Column>
					<ItemEdit
						type={itemType.COMBOBOX}
						field={productFilter.$('category')}
						onChange={handleChangeCategory}
					/>
				</Column>
			</FormEdit>
		);		
	}
};

FilterForm.defaultProps = {
	onSubmit: () => {},
	mode: mode.VIEW,
};
