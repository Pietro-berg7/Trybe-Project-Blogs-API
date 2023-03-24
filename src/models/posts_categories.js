module.exports = (sequelize, DataTypes) => {
  const Post_Category = sequelize.define(
    "Post_Category",
    {},
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );

  Post_Category.associate = (models) => {
    models.Category.belongsToMany(models.Blog_Post, {
      through: Post_Category,
      as: "Blog_Post",
      foreignKey: "category_id",
      otherKey: "post_id",
    });

    models.Blog_Post.belongsToMany(models.Category, {
      through: Post_Category,
      as: "Category",
      foreignKey: "post_id",
      otherKey: "category_id",
    });
  };

  return Post_Category;
};
