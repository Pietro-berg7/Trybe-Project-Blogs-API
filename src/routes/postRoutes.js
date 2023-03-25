const express = require('express');
const { postController } = require('../controllers');
const postValidation = require('../middlewares/postValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation, postValidation, postController.createPost);
router.get('/', tokenValidation, postController.getAllPost);
router.get('/:id', tokenValidation, postController.getPostById);

module.exports = router;