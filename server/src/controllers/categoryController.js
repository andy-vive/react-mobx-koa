import { generateCode } from 'utils';
import { success, failure } from 'utils/response';
import models from 'models';

const CATEGORY_CODE_LENGTH = 4;
const CATEGORY_PREFIX_CODE = 'CA';

export const getAllCategories = async (ctx, next) => {
	const categories = await models.Category.findAll();
  ctx.body = success(categories);
};

export const findCategoryByCode = async (ctx, next) => {
	const category = await models.Category.findOne();

	ctx.body = success(category);
}; 

export const addNewCategory = async (ctx, next) => {
	let { category } = ctx.request.body;
	if (!category) {
		return;
	}
	
	category = await models.Category.create(category);
	
	//update new code
	const newCode = generateCode(category.id + 7, CATEGORY_PREFIX_CODE, CATEGORY_CODE_LENGTH);
	category.code = newCode;
	category = await category.save();

	ctx.body = success(category);
};

export const editCategory = async (ctx, next) => {
	let category = await models.Category.findOne({
		where: {
			code: ctx.params.code,
		},
	});

	if (!category) {
		ctx.body = failure({
			message: `Can not found category with code: ${ctx.params.code}`,
		});
		return;
	}

	const request = ctx.request.body.category;

	category.name = request.name;
	category.description = request.description;
	category = await category.save();

	ctx.body = success(category);
};