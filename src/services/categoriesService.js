const categoriesPost = async ({ name }) => ({ status: 201, response: { name } });

module.exports = {
  categoriesPost,
};