import axios from 'axios';
import categoryStore from './categoryStore';
import { apiRest as categoryRest } from '../apiRest';

export const getAllCategories = () => {
	axios.get(categoryRest.getAll)
		.then((res) => {
			categoryStore.setCategories(res.data.result);
		})
		.catch((err) => {
			throw err;
		});
};