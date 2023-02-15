const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncremente: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      tableName: 'blogPosts',
      underscored: true,
      timestamps: false,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id'
    });
  }
 
  return BlogPost;
};

module.exports = BlogPostModel;