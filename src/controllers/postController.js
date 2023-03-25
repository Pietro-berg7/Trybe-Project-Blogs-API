const { postService } = require('../services');

const createPost = async (req, res) => {
  const { status, response } = await postService.createPost(req.body, req.headers);

  res.status(status).json(response);
};

const getAllPost = async (req, res) => {
  const { status, response } = await postService.getAllPost();

  res.status(status).json(response);
};

const getPostById = async (req, res) => {
  const { status, response } = await postService.getPostById(req.params.id);
  res.status(status).json(response);
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
};