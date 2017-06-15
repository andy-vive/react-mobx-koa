import axios from 'axios';
import categoryStore from './categoryStore';
import { productApi } from 'utils/apiRest';

export const getAllProducts = () => {
	axios.get(productApi.root)
		.then((res) => {
			categoryStore.setCategories(res.data.result);
		})
		.catch((err) => {
			throw err;
		});
};