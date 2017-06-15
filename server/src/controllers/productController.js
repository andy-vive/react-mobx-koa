import { success, failure } from 'utils/response';
import { generateCode } from 'utils';
import model from 'models';
import { ProductUnit } from 'enums/ProductUnit';

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
	
  ctx.body = success(products);
}

export const createProduct = async (ctx, next) => {
	let { product, categoryCode } = ctx.request.body;
	
	if (!product || !categoryCode) {
	}
	// Find Category
	const category = await model.Category.findOne({
		where: {
			code: categoryCode,
		},
	});

	if (!category) {
	  ctx.body = failure({
				message: `Can not found category with code: ${categoryCode}`,
		});
		return;
	}

	product.categoryId = category.id;
	product.unit = ProductUnit[product.unit].code;
	
	product = await model.Product.create(product);
		//update new code
	const newCode = generateCode(product.id + 7, PRODUCT_PREFIX_CODE, PRODUCT_CODE_LENGTH);
	product.code = newCode;
	product = await product.save();

	ctx.body = success(product);
};

export const editProduct = async (ctx, next) => {
	let product = await model.Product.findOne({
		where: {
			code: ctx.params.code,
		},
	});

	if (!product) {
		failure({
			message: `Can not found product with code: ${ctx.params.code}`,
		});
		return;
	}

	const request = ctx.request.body.product;

	product.basePrice = request.basePrice;
	product.quantity = request.quantity;
	product.unit = request.unit;
	product = await product.save();

	ctx.body = success();
}