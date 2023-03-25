const { Category } = require('../models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesFound = await Promise.all(categoryIds
    .map((categoryId) => Category.findOne({ where: { id: categoryId } })));

  const validate = categoriesFound.some((category) => category === null);

  if (validate) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  
  next();
};
