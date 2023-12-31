const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncremente: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
  );
 
  return Category;
};

module.exports = CategoryModel;
