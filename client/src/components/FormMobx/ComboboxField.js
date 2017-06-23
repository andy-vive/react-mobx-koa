import React from 'react';
import { observer } from 'mobx-react';
import { Combobox } from 'react-widgets';
import 'react-widgets/lib/less/react-widgets.less'

export default observer(({ field, onChange }) => {
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
	    data={field.extra}
	  />
	);
});