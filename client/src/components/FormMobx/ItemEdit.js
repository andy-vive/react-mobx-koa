import React from 'react';
import { observer } from 'mobx-react';
import FormGroup from 'components/FormGroup';
import DropdownListField from './DropdownListField';
import ComboboxField from './ComboboxField';
import { itemType } from './utils';

// TODO:
// Make Item edit workable with select, radio button, or checkbox
const ItemEdit = observer(({ field, type = itemType.TEXT, placeholder = null, editing, onChange, onSelect }) => {

	const renderItem = () => {
		let Item = (<span></span>);

		switch (type) {
		case itemType.TEXT:
		case itemType.NUMBER:
			Item = (
				<input type="text" className="form-control" 
 					{...field.bind({ type, placeholder })}
				/>
			);
			break;
		case itemType.DROPDOWNLIST:
			Item = <DropdownListField field={field} />
			break;
		case itemType.COMBOBOX:
			Item = (
				<ComboboxField 
					field={field} 
					onChange={onChange}
					onSelect={onSelect}
				/>
			);
		default:
			break;
		};
		return Item;
	}

	return (
	  <div className="col-md-12">
	    <FormGroup title={field.label}>
	      {
	        editing ? 
						renderItem()
	          :
	          <span className={`value-text`}> {field.value}</span>
	      }
	    </FormGroup>
	  </div>
	);
});

export default ItemEdit;