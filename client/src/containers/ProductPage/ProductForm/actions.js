import axios from 'axios';
import { productApi } from 'utils/apiRest';
import { ToastSuccess, ToastDanger } from 'react-toastr-basic';
import  formStore from './formStore';


export const createProduct = (categoryCode, product) => {
	if (Object.keys(product).lenth === 0) {
		return;	
	}
	axios.post(`${productApi.root}`, {
		product,
	})
	.then((res) => {
		if (res.data.success) {
			ToastSuccess('Create new product successful');
			formStore.reset();
		}
	})
	.catch((err) => {
		throw err;
	});
};

export const updateProduct = (productCode) => {

};

export const getProduct = (productCode) => {

};

export const reset = () => {
	formStore.reset();
};