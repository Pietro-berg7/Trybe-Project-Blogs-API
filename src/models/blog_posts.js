module.exports = (sequelize, DataTypes) => {
  const Blog_Post = sequelize.define(
    "Blog_Post",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING(255),
      content: DataTypes.STRING(255),
      user_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tableName: "blog_posts",
      underscored: true,
      timestamps: false,
    }
  );

  Blog_Post.associate = (models) => {
    Blog_Post.belongsTo(models.User, {
      as: "User",
      foreignKey: "user_id",
    });
  };

  return Blog_Post;
};
