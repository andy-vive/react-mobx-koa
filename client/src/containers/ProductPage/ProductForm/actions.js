import axios from 'axios';
import { productApi } from 'utils/restApi';
import { ToastSuccess, ToastDanger } from 'react-toastr-basic';
import  formStore from './formStore';


export const createProduct = (categoryCode, product) => {
	if (Object.key(product).lenth === 0) {
		
	}
};

export const updateProduct = (productCode) => {

};

export const getProduct = (productCode) => {

};

export const reset = () => {
	formStore.reset();
};