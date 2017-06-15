import React from 'react';
import Box from 'components/Box';
import FormEdit, { ItemEdit, Column } from 'components/FormMobx';

const FilterForm = () => (
	<FormEdit
		title="Filter"
	>
		<Column>
			<ItemEdit></ItemEdit>
		</Column>
	</FormEdit>
);

export default FilterForm;