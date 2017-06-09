import React from 'react';
import FormEdit, {ItemEdit, Column} from 'components/FormEdit';
import { observer } from 'mobx-react';
@observer
export default class extends React.Component {
	render() {
		const { code, name, description, priceTypeI, priceTypeII } = this.props.details;
		return (
			<FormEdit
				title="Category Details"
				edit={false}
				onSave={() => {}}
			>
				<Column>
	        <ItemEdit
	          title={'Category Code'}
	          value={code}
	        />
	        <ItemEdit
	          title={'Category Name'}
	          value={name}
	        />
	        <ItemEdit
	          title={'Description'}
	          value={description}
	        />
	        <ItemEdit
	          title={'Price Type I'}
	          value={priceTypeI}
	        />
	        <ItemEdit
	          title={'Price Type II'}
	          value={priceTypeII}
	        />
	      </Column>
			</FormEdit>
		);		
	}
};