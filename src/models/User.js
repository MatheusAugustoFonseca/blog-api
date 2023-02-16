const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost, {
  //     as: 'blogPosts',
  //     foreignKey: 'id'
  //   });
  // }
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'categories',
      foreignKey: 'userId'
    });
  }
 
  return User;
};

module.exports = UserModel;
