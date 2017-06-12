export const productsOptions = [
  'Pack', 'Tube',
];

const fields = [
	{
  name: 'name',
  label: 'Product Name',
  placeholder: 'Enter product name...',
  rules: 'required|string|between:1,50',
	},
	// TODO: implement select category to add product in the future
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
	{
	  name: 'unit',
	  label: 'Unit',
    value: 'Pack',
    extra: productsOptions,
	},
	{
	  name: 'quantity',
	  label: 'Quantity',
	  placeholder: 'Enter quantity...',
	  rules: 'required|number',
	},

];

export default fields;