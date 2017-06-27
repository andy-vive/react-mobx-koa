import { pipeP, pipe, curry, ifElse, useWith, path, set, lensProp } from 'ramda';
import { getResultsFromResponse } from 'utils';

import { getCategoriesApi } from 'containers/CategoryPage/apis';
import productStore from './productStore';
import filterStore from './FilterForm/filterStore';
import { getProductsApi } from '../apis';

// TODO handle try catch
export const getProducts = ({ categoryCode }) =>  pipeP(
	getProductsApi,
	getResultsFromResponse,
	productStore.setProducts
)({ categoryCode });

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
};

const checkValueThenSetToResult = curry((propName, newValue, target) => ifElse(
	() => !newValue,
	() => target,
	() => set(lensProp(propName), newValue, target)
)());

const getCategoryCodeIfExist = curry(useWith(
	(newValue, target) => checkValueThenSetToResult('categoryCode')(newValue, target),
	[
		path(['category', 'key'])
	]
));


export const applyFilter = (formValue) => {
	console.log(getCategoryCodeIfExist(formValue, {}))
	pipe(
		getCategoryCodeIfExist,
		getProducts
	)(formValue, {});	
}

