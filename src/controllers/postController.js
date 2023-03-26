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
  const { id } = req.params;
  const blogPost = await postService.getPostById(id);
  if (!blogPost) {
  return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(blogPost);
};

const editPost = async (req, res) => {
  const { id: postId } = req.params;
  const { title, content } = req.body;
  const userId = await getUser(req.headers.authorization);
  const blogPost = await postService.getPostById(postId);
  if (blogPost.dataValues.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const updatedPost = await postService.editPost({ postId, title, content });
  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const userId = await getUser(req.headers.authorization);
  const blogPost = await postService.getPostById(postId);
  if (!blogPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (blogPost.dataValues.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  await postService.deletePost(postId);
  return res.status(204).end();
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
  deletePost,
};