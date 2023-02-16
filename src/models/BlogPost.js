const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // userId: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'userId',
      references: {
        model: 'user',
        key: 'userId',
      },
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      createdAt: 'published',
      updatedAt: 'updated',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  }
 
  return BlogPost;
};

module.exports = BlogPostModel;