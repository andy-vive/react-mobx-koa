import { pipeP } from 'ramda';
import { getResultsFromResponse } from 'utils';

import { getCategoriesApi } from 'containers/CategoryPage/apis';
import productStore from './productStore';
import filterStore from './FilterForm/filterStore';
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

const convertFromResultToDataList = (result) => 
	result.map((r) => ({
		key: r.code,
		label: r.name,
	}));

export const changeCategory = (value) => {
	pipeP(
		getCategoriesApi,
		getResultsFromResponse,
		convertFromResultToDataList,
		(result) => filterStore.set('extra', {
			category: result
		})
	)({ name: value });
}