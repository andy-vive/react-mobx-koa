import Sequelize from 'sequelize';
import { generateCode } from '../utils';
import model from '../models';

const PRODUCT_CODE_LENGTH = 4;
const PRODUCT_PREFIX_CODE = 'SP';

export const getProductsByCategory = async (ctx, next) => {
	const products = model.Category.findOne({
		where: {
			id: 19
		},
		include: [{
			model: model.Product,
		}],
	});
	
  ctx.body = {
		success: true,
		result: products,
	};
}

export const createProduct = async (ctx, next) => {
	let { product, categoryCode } = ctx.request.body;
	
	if (!category || !categoryCode) {
		return;
	}
	// Find Category
	const category = await model.Category.findOne({
		where: {
			code: categoryCode,
		},
	});

	if (!category) {
	  ctx.body = {
			success: false,
			result: null,
			error: {
				message: `Can not found category with code: ${categoryCode}`,
			},
		};
		return;
	}

	product.categoryId = category.id;
	product = await model.Product.create(product);
		//update new code
	const newCode = generateCode(product.id + 7, PRODUCT_PREFIX_CODE, PRODUCT_CODE_LENGTH);
	product.code = newCode;
	product = await product.save();

	ctx.body = {
		success: true,
		result: product,
	};
};