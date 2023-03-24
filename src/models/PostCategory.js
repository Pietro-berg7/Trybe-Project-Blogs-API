module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      as: "posts",
      foreignKey: "categoryId",
      otherKey: "postId",
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: "categories",
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return PostCategory;
};
