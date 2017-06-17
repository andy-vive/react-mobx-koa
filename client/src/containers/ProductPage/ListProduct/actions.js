import { pipeP } from 'ramda';
import productStore from './productStore';
import { getProductsApi } from '../apis';

const getProductFromResponse = (res) => 
	res.data.success ? res.data.result : []

// TODO handle try catch
export const getProducts = (categoryCode) =>  pipeP(
	getProductsApi,
	getProductFromResponse,
	productStore.setProducts
)(categoryCode);
