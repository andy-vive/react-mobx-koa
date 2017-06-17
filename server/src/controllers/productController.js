import { pipe, pipeP, ifElse, propOr, isEmpty, always } from 'ramda';
import { generateCode, program } from 'utils';
import { success, failure } from 'utils/response';

import models from 'models';
import { ProductUnit } from 'enums/ProductUnit';

import { findAll, findProductByCode, findProductByCategoryCode, createProduct } from 'repos/productRepo';
import { findCategoryByCode } from 'repos/categoryRepo';

const PRODUCT_CODE_LENGTH = 4;
const PRODUCT_PREFIX_CODE = 'SP';

const getParamsFromRequest = (param) => propOr('', param);

export const getProductsByCategory = async (ctx, next) => {
	const products = await pipe(
		getParamsFromRequest('categoryCode'),
		pipeP(
			ifElse(
				isEmpty,
				findAll,
				findProductByCategoryCode
			),
			ifElse(
				isEmpty,
				failure,
				success
			)
		)
	)(ctx.request.query);
  ctx.body = products;
}

const convertRequestToProduct = (category) => (product) => {
	product.categoryId = category.id;
	product.unit = ProductUnit[product.unit].code;
	return product;
}

const updateNewCode = (product) => {
	product.code = generateCode(product.id + 7, PRODUCT_PREFIX_CODE, PRODUCT_CODE_LENGTH);
	return product;
}

export const addProduct = async (ctx, next) => {
	const category = await pipe(
		getParamsFromRequest('categoryCode'),
		ifElse(
			isEmpty,
			always(null),
			findCategoryByCode
		)
	)(ctx.request.body);

	const product = await pipe(
		getParamsFromRequest('product'),
		convertRequestToProduct(category),
		pipeP(
			createProduct,
			updateNewCode,
			(p) => p.save(),
			success
		)
	)(ctx.request.body);
	ctx.body = product;
};

export const editProduct = async (ctx, next) => {


	const request = ctx.request.body.product;

	product.basePrice = request.basePrice;
	product.quantity = request.quantity;
	product.unit = request.unit;
	product = await product.save();

	ctx.body = success();
}


const checkProductEmpty = (product) => {
}

const updateToProduct = () => {
}
const notFoundProduct = () => (
	failure({
			message: `Can not found product with code: ${ctx.params.code}`,
	})
);