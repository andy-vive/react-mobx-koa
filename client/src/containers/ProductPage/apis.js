import axios from 'axios';
import { productApi } from 'utils/apiRest';

export const getProductsApi = () => {
	console.log('call')
	return axios.get(productApi.root);
}