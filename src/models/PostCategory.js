const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      autoIncremente: true,
      primaryKey: true,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      autoIncremente: true,
      primaryKey: true,
    },
  },
    {
      tableName: 'PostCategories',
      underscored: true,
      timestamps: false,
    },
  );
 
  PostCategory.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_post',
      foreignKey: 'id',
      otherKey: 'id',
      through: PostCategory
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'id',
      otherKey: 'id',
      through: PostCategory
    });    
  }
 
  return PostCategory;
};

module.exports = PostCategoryModel;