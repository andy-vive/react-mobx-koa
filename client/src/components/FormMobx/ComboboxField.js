import React from 'react';
import { observer } from 'mobx-react';
import { Combobox } from 'react-widgets';
import 'react-widgets/lib/less/react-widgets.less'

const Comp = ({ field, onChange, onSelect }) => {
	const handleChange = (e) => {
		field.sync(e);
		onChange(e);
	};
	return (
	  <Combobox
	  	valueField='key'
	  	textField='label'
	    value={field.value}
	    onChange={handleChange}
	    onSelect={onSelect}
	    data={field.extra}
	  />
	);	
};

Comp.defaultProps = {
	onChange: () => {},
	onSelect: () => {},
};

export default observer(Comp);
