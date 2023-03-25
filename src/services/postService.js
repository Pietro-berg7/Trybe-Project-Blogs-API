const { Category, BlogPost, User } = require('../models');

const createPost = async () => {};

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: 'password' },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return { status: 200, response: allPost };
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: 'password' },
      }, 
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (!post) return { status: 404, response: { message: 'Post does not exist' } };
  
  return { status: 200, response: post };
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
};