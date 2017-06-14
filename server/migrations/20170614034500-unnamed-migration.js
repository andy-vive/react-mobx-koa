'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [1, 50]
        }
      },
      base_price: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      unit: {
        type: Sequelize.INTEGER,
      }, 
      createBy: {
        type: Sequelize.INTEGER,
      },   
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
          key: 'id',
        }
      },   
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('product');
  }
};
