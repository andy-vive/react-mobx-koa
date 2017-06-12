import { observable, action } from 'mobx';
import FormMobx from 'components/FormMobx/store';
import fields from './fields';

class ProductForm extends FormMobx {
	@observable categories = [];
	
	@action setCategories(categories) {
		this.categories = categories;
	}
}

const productForm = new ProductForm({ fields });
export default productForm;