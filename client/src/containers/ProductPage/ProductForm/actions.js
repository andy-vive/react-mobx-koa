import axios from 'axios';
import { pipe, pipeP, curry, tryCatch, path, ifElse, isEmpty, pathSatisfies } from 'ramda';
import { Either } from 'ramda-fantasy';

import { ToastSuccess, ToastDanger } from 'react-toastr-basic';

import  formStore from './formStore';
import { createProductApi } from '../apis';


const showError = (error) => ToastDanger(error.message);

const checkCategoryCode = ifElse(
	pathSatisfies(isEmpty, ['categoryCode']),
	() => Either.Left(new Error('Category code is empty')),
	Either.Right
);

const checkProduct = ifElse(
	pathSatisfies(isEmpty, ['product']),
	() => Either.Left(new Error('Product is empty')),
	Either.Right
);

const checkBasePrice = ifElse(
	pathSatisfies(isEmpty, ['product', 'basePrice']),
	() => Either.Left(new Error('Please enter base price')),
	Either.Right
);

const checkQuantity = ifElse(
	pathSatisfies(isEmpty, ['product', 'quantity']),
	() => Either.Left(new Error('Please enter quantity')),
	Either.Right
);


const completeCreateProduct = pipe(
		() => formStore.reset(),
		() => ToastSuccess('Create product success')
	)

const callCreateProductApi = ({ categoryCode, product }) => pipeP(
	() => curry(createProductApi)(categoryCode)(product)
		.then((res) => Either.Right(res.data.result))
		.catch((err) => Either.Left(new Error('Create Product fail'))),
	Either.either(showError, completeCreateProduct),
)({ categoryCode, product})

const eitherErrorOrCreateProduct = Either.either(showError, callCreateProductApi);

export const createProduct = (categoryCode, product) => {
	const params = { categoryCode, product };
	eitherErrorOrCreateProduct(
		checkCategoryCode(params)
			.chain(checkProduct)
			.chain(checkBasePrice)
			.chain(checkQuantity)
	);
}
