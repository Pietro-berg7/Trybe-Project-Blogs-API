const { categoriesValidation } = require('../helpers/schemas');
const { Category } = require('../models');

const validateName = async (req, res, next) => {
  const { error } = categoriesValidation.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

const validateField = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesFound = await Promise.all(categoryIds
    .map((categoryId) => Category.findOne({ where: { id: categoryId } })));
  const validate = categoriesFound.some((category) => category === null);

  if (validate) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  
  next();
};

module.exports = {
  validateName,
  validateField,
  validateCategory,
};
