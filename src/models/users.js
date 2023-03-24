module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING(255),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(255),
      image: DataTypes.STRING(255),
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Blog_Post, {
      as: "Blog_Post",
      foreignKey: "user_id",
    });
  };

  return User;
};
