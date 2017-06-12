const fields = [
	{
  name: 'name',
  label: 'Product Name',
  placeholder: 'Enter product name...',
  rules: 'required|string|between:1,50',
	},
	{
  name: 'category',
  label: 'Belong to Category',
  placeholder: 'Choose any category...',
  rules: 'required',
	},
	{
	  name: 'basePrice',
	  label: 'Base Price',
	  placeholder: 'Enter base price...',
	  rules: 'required|number',
	},
];

export default fields;