const { Category } = require('../models');

const categoriesPost = async ({ name }) => {
  await Category.create({ name });

  const category = await Category.findOne({ where: { name } });

  return { status: 201, response: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  
  return { status: 200, response: categories };
};

module.exports = {
  categoriesPost,
  getAllCategories,
};