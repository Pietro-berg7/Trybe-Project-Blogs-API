const express = require('express');
const { userController } = require('../controllers');
const userValidation = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', userValidation, userController.userPost);
router.get('/', tokenValidation, userController.getAllUsers);
router.get('/:id', tokenValidation, userController.getUserById);
router.delete('/me', tokenValidation, userController.deleteUser);

module.exports = router;