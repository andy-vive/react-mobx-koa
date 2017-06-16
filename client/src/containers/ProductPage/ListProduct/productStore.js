import { observable, action } from 'mobx';

class ProductStore {
	@observable products = [];
	@observable isLoading = false;
	@observable failure;
	
	constructor() {
	}

	@action setProducts = (products) => {
		this.products = products;
	}	
	@action setIsLoading = (isLoading) => {
		this.isLoading = isLoading;
	}	
	@action setFailure = (failure) => {
		this.failure = failure;
	}


};

const productStore = new ProductStore();
export default productStore;
export { ProductStore };