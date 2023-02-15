'use strict';

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('blogPosts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'title',
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users', // model esta referenciando o nome da tabela
            key: 'id',
          },
        },
        published: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'published',
        },
        updated: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'updated',
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('blogPosts');
    }
  };
