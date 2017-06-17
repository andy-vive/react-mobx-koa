import models from 'models';

// findCategoryByCode :: String -> Promise
export const findCategoryByCode = async (code) => 
	models.Category.findOne({
		where: {
			code,	
		},
	});

// findAllCategory :: null -> Promise
export const findAllCategory = async () => 
	models.Category.findAll();