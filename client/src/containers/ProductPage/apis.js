import axios from 'axios';
import queryString from 'query-string';

const productUri = '/api/products';
export const productApi = {
	root: productUri,
};

export const getProductsApi = (params = {}) => 
	axios.get(`${productApi.root}?${queryString.stringify(params)}`);

export const createProductApi = (categoryCode, product) => 
	axios.post(`${productApi.root}`, {
		product,
		categoryCode,
	});

