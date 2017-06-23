import categoryStore from 'containers/CategoryPage/ListCategory/categoryStore';
import categoryForm from 'containers/CategoryPage/DetailForm/formStore';

import productStore from 'containers/ProductPage/ListProduct/productStore';
import productFilter from 'containers/ProductPage/ListProduct/FilterForm/filterStore';
import productForm from 'containers/ProductPage/ProductForm/formStore';

const store = {
	categoryStore,
	categoryForm,
	productForm,
	productFilter,
	productStore,
};
export default store;
