import { pipeP } from 'ramda';
import { getResultsFromResponse } from 'utils';
import productStore from './productStore';
import { getProductsApi } from '../apis';

// TODO handle try catch
export const getProducts = (categoryCode) =>  pipeP(
	getProductsApi,
	getResultsFromResponse,
	productStore.setProducts
)(categoryCode);

export const filterFormSubmit = (value) => {
	console.log(value);
}