const { Category, BlogPost, User, sequelize, PostCategory } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const transaction = await sequelize.transaction();
  const newBlogPost = await BlogPost.create({ title, content, userId });
  const postId = newBlogPost.dataValues.id;
  
  await Promise.all(categoryIds
    .map((id) => PostCategory.create({ postId, categoryId: id }, { transaction })));

  await transaction.commit();
  
  return newBlogPost;
};

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: 'password' },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
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
        model: User, as: 'user', attributes: { exclude: 'password' },
      }, 
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
  });

  if (!post) return { status: 404, response: { message: 'Post does not exist' } };

  return { status: 200, response: post };
};

const editPost = async () => {};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
};