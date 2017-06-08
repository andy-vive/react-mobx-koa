import model from '../models';
export const getAllCategories = async(ctx, next) => {

	const category = await model.Category.findAll();
  ctx.body = {
		success: true,
		data: category,
	};
}