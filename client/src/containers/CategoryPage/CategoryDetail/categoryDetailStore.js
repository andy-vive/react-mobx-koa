import { observable, action } from 'mobx';

class CategoryDetailStore {
	@observable code;
	@observable name;
	@observable description;
	@observable priceTypeI;
	@observable priceTypeII;
	@observable isLoding;

	constructor() {
	}

	@action setCode(code) {
		this.code = code;
	}
	@action setName(name) {
		this.name = name;
	}
	
	@action setDescription(description) {
		this.description = description;
	}
	
	@action setPriceTypeI(priceTypeI) {
		this.priceTypeI = priceTypeI;
	}
	
	@action setPriceTypeII(priceTypeII) {
		this.priceTypeII = priceTypeII;
	}

	@action setIsLoading(isLoding) {
		this.isLoding = isLoding;
	}
}

const categoryDetailStore = new CategoryDetailStore();
export default categoryDetailStore;
export { CategoryDetailStore };