const { Category } = require('../models');

const categoriesPost = async ({ name }) => ({ status: 201, response: { name } });

const getAllCategories = async () => {
  const categories = await Category.findAll();
  
  return { status: 200, response: categories };
};

module.exports = {
  categoriesPost,
  getAllCategories,
};