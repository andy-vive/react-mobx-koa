import axios from 'axios';
const root = '/api/categories';
const apiRest = {
	root: root,
};

export const getCategoriesApi = (categoryCode = '') => 
	axios.get(`${apiRest.root}?categoryCode=${categoryCode}`);

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