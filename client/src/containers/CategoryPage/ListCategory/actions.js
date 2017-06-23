import { pipeP } from 'ramda';
import { getResultsFromResponse } from 'utils';
import categoryStore from './categoryStore';
import { getCategoriesApi } from '../apis';

// TODO handle try catch
export const getCategories = (categoryCode) =>  pipeP(
	getCategoriesApi,
	getResultsFromResponse,
	categoryStore.setCategories
)(categoryCode);

