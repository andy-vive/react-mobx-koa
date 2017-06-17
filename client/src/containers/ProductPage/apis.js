import axios from 'axios';
import { productApi } from 'utils/apiRest';

export const getProductsApi = (categoryCode = '') => 
	axios.get(`${productApi.root}?categoryCode=${categoryCode}`);