const fields = [
	{
  name: 'name',
  label: 'Category Name',
  placeholder: 'Category Name',
  rules: 'required|string|between:1,50',
	},
	{
	  name: 'description',
	  label: 'Description',
	  placeholder: 'Enter description: Gooooood!!!',
	  rules: 'required|string',
	},
	{
	  name: 'priceTypeI',
	  label: 'Price Type I',
	  placeholder: 'Price for 1 product',
	  rules: 'required|number',
	},
	{
	  name: 'priceTypeII',
	  label: 'Price Type II',
	  placeholder: 'Price for 5 ~ 10 products',
	  rules: 'required|number',
	},	
];

export default fields;