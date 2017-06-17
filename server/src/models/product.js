const ProductModel = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		code: {
			type: DataTypes.STRING,
      validate: {
	      notEmpty: true,
	      len: [1, 50],
	    },
		}, 
		basePrice: {
			type: DataTypes.INTEGER,
			field: 'base_price',
		},
		quantity: {
			type: DataTypes.INTEGER,
		},
		unit: {
			type: DataTypes.INTEGER,
		}, 
		createBy: {
			type: DataTypes.INTEGER,
		},
		categoryId: {
			type: DataTypes.INTEGER,
			field: 'category_id',
		},
	}, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'product',
    getterMethods : {
      createdAt: function() {
        return this.created_at;
      }
    }
	});

	Product.associate = (models) => {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
	};

	return Product;
}; 

export default ProductModel;