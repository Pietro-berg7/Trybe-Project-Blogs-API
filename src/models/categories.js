module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING(255),
    },
    {
      tableName: "categories",
      underscored: true,
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Post_Category, {
      as: "Post_Category",
      foreignKey: "category_id",
    });
  };

  return Category;
};
