import { pipeP, pipe, curry, useWith, ifElse, isEmpty, set, lensProp, prop } from 'ramda';
import { Either } from 'ramda-fantasy';
import { generateCode, getParamsFromRequest } from 'utils';
import { success, failure } from 'utils/response';
import models from 'models';
import { findAllCategory, findCategoryByCode, findCategoriesBy } from 'repos/categoryRepo';

const CATEGORY_CODE_LENGTH = 4;
const CATEGORY_PREFIX_CODE = 'CA';

const getParamIfExist = curry((input, propName, result) => useWith(
	(newProp, propName, target) => ifElse(
      () => !newProp,
      () => target,
      () => set(lensProp(propName), newProp, target),
    )(),
	[
		prop(propName)
	]
)(input, propName, result));

export const getAllCategories = async (ctx, next) => {
	ctx.body = await pipe(
		getParamIfExist(ctx.request.query)('code'),
		getParamIfExist(ctx.request.query)('name'),
		pipeP(
			findCategoriesBy,
			success
		)	
	)({});
}

export const getCategory = async (ctx, next) => {
	ctx.body = await pipe(
		getParamsFromRequest('code'),
		pipeP(
			findCategoryByCode,
			success,
		),
	)(ctx.params);
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