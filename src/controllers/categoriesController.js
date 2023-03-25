const { categoriesService } = require('../services');

const categoriesPost = async (req, res) => {
  const { status, response } = await categoriesService.categoriesPost(req.body);

  res.status(status).json(response);
};

module.exports = {
  categoriesPost,
};