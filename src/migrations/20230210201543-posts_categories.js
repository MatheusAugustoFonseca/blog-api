'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postsCategories', {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts', // model é o nome da tabela,
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories', // model é o nome da tabela,
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('postsCategories');
  }
};
