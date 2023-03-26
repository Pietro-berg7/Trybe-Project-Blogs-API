const { Category, BlogPost, User, sequelize, PostCategory } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const transaction = await sequelize.transaction();
  const newBlogPost = await BlogPost.create({ title, content, userId });
  const postId = newBlogPost.dataValues.id;
  
  await Promise.all(
    categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId }, { transaction })),
  );
  
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

  return post;
};

const editPost = async ({ postId, title, content }) => {
  await BlogPost.update({ title, content }, { where: { id: postId } });
  const post = await BlogPost.findOne({
    where: { id: postId },
    include: [
      {
        model: User, as: 'user', attributes: { exclude: 'password' },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
  });
  return post;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
  deletePost,
};