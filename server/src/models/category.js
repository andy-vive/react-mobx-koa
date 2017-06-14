export default (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		code: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
		},
		name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 100]
      }
		},
		description: {
      type: DataTypes.TEXT,
		},
	},
	{
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'category',
    getterMethods : {
      createdAt: function() {
        return this.created_at;
      }
    },
  });

  Category.associate = (models) => {
    Category.hasMany(models.Product, { foreignKey: 'category_id' });
  };

	return Category;
};
