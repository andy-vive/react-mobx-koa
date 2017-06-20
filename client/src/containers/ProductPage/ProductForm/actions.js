import axios from 'axios';
import { pipe, pipeP, curry, tryCatch, path, ifElse, isEmpty } from 'ramda';
import { Either } from 'ramda-fantasy';
import { productApi } from 'utils/apiRest';

import { ToastSuccess, ToastDanger } from 'react-toastr-basic';

import  formStore from './formStore';
import { createProductApi } from '../apis';


const showError = (error) => ToastDanger(error.message);

const checkCategoryCode = (params) => 
	ifElse(
		() => isEmpty(path(['categoryCode'], params)),
		() => Either.Left(new Error('Category code is empty')),
		() => Either.Right(params)
	)(params);

const checkProduct = (params) => 
	ifElse(
		() => isEmpty(path(['product'], params)),
		() => Either.Left(new Error('Product is empty')),
		() => Either.Right(params)
	)(params);

const checkBasePrice = (params) => 
	ifElse(
		() => isEmpty(path(['product', 'basePrice'], params)),
		() => Either.Left(new Error('Please enter base price')),
		() => Either.Right(params)
	)(params);

const checkQuantity = (params) => 
	ifElse(
		() => isEmpty(path(['product', 'quantity'], params)),
		() => Either.Left(new Error('Please enter quantity')),
		() => Either.Right(params)
	)(params);

const callCreateProductApi = ({ categoryCode, product }) => 
	curry(createProductApi)(categoryCode)(product)
		.then((res) => Either.Right(res.data.result))
		.catch((err) => Either.Left(new Error('Create Product fail')))

const completeCreateProduct = () => 
	pipe(
		() => formStore.reset(),
		() => ToastSuccess('Create product success')
	)();

const eitherErrorOrCreateProduct = Either.either(showError, callCreateProductApi);

export const createProduct = (categoryCode, product) => {
	const params = { categoryCode, product };
	pipeP(
		() => eitherErrorOrCreateProduct(
			checkCategoryCode(params)
				.chain(checkProduct)
				.chain(checkBasePrice)
				.chain(checkQuantity)
		),
		completeCreateProduct
	)()
}
