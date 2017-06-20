import { pipe, pipeP, ifElse, always, prop, propOr } from 'ramda';
import productStore from './productStore';
import { getProductsApi } from '../apis';

const getProductFromResponse = pipe(
	prop('data'),
	propOr([], 'result')
);

// TODO handle try catch
export const getProducts = (categoryCode) =>  pipeP(
	getProductsApi,
	getProductFromResponse,
	productStore.setProducts
)(categoryCode);
