
export const getAllCategories = async(ctx, next) => {
	 ctx.body = {
		success: true,
		result: [1,2,3],
	};
}