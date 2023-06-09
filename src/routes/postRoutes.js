const express = require('express');
const { postController } = require('../controllers');
const postValidation = require('../middlewares/postValidation');
const editPostValidation = require('../middlewares/editPostValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const categoriesValidation = require('../middlewares/categoriesValidation');

const router = express.Router();

router.post(
    '/', 
    tokenValidation, 
    postValidation, 
    categoriesValidation.validateField,
    categoriesValidation.validateCategory, 
    postController.createPost,
);
router.get('/', tokenValidation, postController.getAllPost);
router.get('/:id', tokenValidation, postController.getPostById);
router.put('/:id', tokenValidation, editPostValidation, postController.editPost);
router.delete('/:id', tokenValidation, postController.deletePost);
router.get('/search', tokenValidation, postController.searchPost);

module.exports = router;