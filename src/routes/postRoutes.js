const express = require('express');
const { postController } = require('../controllers');
const postValidation = require('../middlewares/postValidation');
const editPostValidation = require('../middlewares/editPostValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const categoriesValidation = require('../middlewares/categoriesValidation');

const router = express.Router();

router.post('/', tokenValidation, postValidation, categoriesValidation, postController.createPost);
router.get('/', tokenValidation, postController.getAllPost);
router.get('/:id', tokenValidation, postController.getPostById);
router.put('/:id', tokenValidation, editPostValidation, postController.editPost);

module.exports = router;