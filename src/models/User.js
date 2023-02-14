const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncremente: true,
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

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'BlogPosts',
      foreignKey: 'id'
    });
  }
 
  return User;
};

module.exports = UserModel;
