import axios from 'axios';
import _ from 'lodash';
import { pipe, pipeP, prop, path, curry, ifElse, isEmpty, pathSatisfies } from 'ramda';
import { Either } from 'ramda-fantasy';
import { ToastSuccess, ToastDanger } from 'react-toastr-basic';
import  formStore from '../DetailForm/formStore';
import { createCategoryApi, getCategoryApi, updateCategoryApi } from '../apis';

const showError = (error) => ToastDanger(prop('message')(error));

const doingAddNewCategory = pipeP(
	() => curry(createCategoryApi)
		.then((res) => Either.Right(res.data.result))
		.catch((err) => Either.Left(new Error('Create category fail'))),
	Either.either(showError, completeCreateCategory),
);

const checkCategoryName = ifElse(
	pathSatisfies(isEmpty, ['name']),
	() => Either.Left(new Error('Please enter category name')),
	Either.Right
);

const checkPrice = ifElse(
	pathSatisfies(isEmpty, ['priceTypeI']),
	() => Either.Left(new Error('Please enter price')),
	Either.Right
);

const completeCreateCategory = pipe(
	() => formStore.reset(),
	() => ToastSuccess('Create category success')
);

const eitherShowErrorOrCreateCategory = Either.either(showError, doingAddNewCategory);

export const addNewCategory = (category) => {
	eitherShowErrorOrCreateCategory(
		checkCategoryName(category)
		.chain(checkCategoryName)
		.chain(checkPrice)
	);
};

const checkCategoryCode = ifElse(
	isEmpty,
	() => Either.Left(new Error('Please enter price')),
	Either.Right
);

const doingGetCategory = (categoryCode) => pipeP(
	() => getCategoryApi(categoryCode)
		.then(Either.Right)
		.catch(Either.Left),
	Either.either(showError, handleGetCategorySuccess)
)(categoryCode);

const handleGetCategorySuccess = pipe(
	path(['data', 'result']),
	(result) => formStore.set('value', {...result})
);

const eitherShowErrorOrDoingGetCategory = Either.either(showError, doingGetCategory);

export const getCategory = (categoryCode) => {
	eitherShowErrorOrDoingGetCategory(
		checkCategoryCode(categoryCode)
	);
};

const completeUpdateCategory = pipe(
	() => ToastSuccess('Update category successfully'),	
);

const doingUpdateCategory = (category) => pipeP(
	() => updateCategoryApi(category)
		.then((res) => Either.Right(res.data.result))
		.catch((err) => Either.Left(new Error('Update category fail'))),
	Either.either(showError, completeUpdateCategory),
)(category);
const eitherShowErrorOrUpdateCategory = Either.either(showError, doingUpdateCategory)

export const updateCategory = (category) => {
	eitherShowErrorOrUpdateCategory(
		checkCategoryName(category)
		.chain(checkPrice)
	);
};

export const resetForm = () => {
	formStore.reset();
};