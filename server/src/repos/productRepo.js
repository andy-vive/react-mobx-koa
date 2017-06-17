import models from 'models';

// findProductByCode :: String -> Promise
export const findProductByCode = async (code) => 
	models.Product.findOne({
		where: {
			code,
		},
	});

// findProductByCategoryCode :: String -> Promise
export const findProductByCategoryCode = async (code) => 
	models.Product.findAll({
		include: [
			{
				model: models.Category,
				where: {
					code,
				},
			},
		],
	});

// findAll :: null -> Promise
export const findAll = async () => models.Product.findAll();

// createProduct :: Product ->
export const createProduct = async (product) => models.Product.create(product);