const { getUser } = require('../helpers/JWT');
const { postService } = require('../services');

const createPost = async (req, res) => {
  const authorizationHeader = req.headers.authorization; 
  const { title, content, categoryIds } = req.body;
  const userId = await getUser(authorizationHeader);
  const post = await postService.createPost({ 
    title, 
    content, 
    categoryIds, 
    userId, 
  });

  return res.status(201).json(post);
};

const getAllPost = async (req, res) => {
  const { status, response } = await postService.getAllPost();

  res.status(status).json(response);
};

const getPostById = async (req, res) => {
  const { status, response } = await postService.getPostById(req.params.id);
  res.status(status).json(response);
};

const editPost = async (req, res) => {
  const { status, response } = await postService.editPost(
    req.body, req.params.id, req.headers.authorization,
  );

  res.status(status).json(response);
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
};