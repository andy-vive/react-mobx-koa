import axios from 'axios';

const productUri = '/api/products';
export const productApi = {
	root: productUri,
};

export const getProductsApi = (categoryCode = '') => 
	axios.get(`${productApi.root}?categoryCode=${categoryCode}`);

export const createProductApi = (categoryCode, product) => 
	axios.post(`${productApi.root}`, {
		product,
		categoryCode,
	});

