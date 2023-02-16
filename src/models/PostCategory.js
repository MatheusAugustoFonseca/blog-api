const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      // autoIncremente: true,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'post_id',
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      // autoIncremente: true,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    },
  );

 
  PostCategory.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory
    });    
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory
    });
  }

  // PostCategory.associate = ({ BlogPost, Category }) => {
  //   BlogPost.belongsToMany(Category, {
  //     as: 'categories',
  //     foreignKey: 'postId',
  //     otherKey: 'categoryId',
  //     through: PostCategory
  //   });
  //   Category.belongsToMany(BlogPost, {
  //     as: 'posts',
  //     foreignKey: 'categoryId',
  //     otherKey: 'postId',
  //     through: PostCategory
  //   });    
  // }
  // PostCategory.associate = (models) => {
  //   models.BlogPost.belongsToMany(models.Category, {
  //     as: 'categories',
  //     foreignKey: 'post_id',
  //     otherKey: 'category_id',
  //     through: PostCategory
  //   });
  //   models.Category.belongsToMany(models.BlogPost, {
  //     as: 'blog_posts',
  //     foreignKey: 'category_id',
  //     otherKey: 'post_id',
  //     through: PostCategory
  //   });    
  // }
 
  return PostCategory;
};

module.exports = PostCategoryModel;