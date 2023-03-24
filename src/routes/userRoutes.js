const express = require('express');
const { userController } = require('../controllers');
const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', userValidation, userController.userPost);

module.exports = router;