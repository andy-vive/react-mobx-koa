import axios from 'axios';
import queryString from 'query-string';
const root = '/api/categories';
const apiRest = {
	root: root,
};

export const getCategoriesApi = (params = {}) => 
	axios.get(`${apiRest.root}?${queryString.stringify(params)}`);

export const getCategoryApi = (categoryCode) => 
	axios.get(`${apiRest.root}/${categoryCode}`);

export const createCategoryApi = (category) => 
	axios.post(`${apiRest.root}`, {
		category,
	});

export const updateCategoryApi = (category) =>
	axios.put(`${apiRest.root}/${category.code}`, {
		category,
	});