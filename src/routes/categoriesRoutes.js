const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const categoriesValidation = require('../middlewares/categoriesValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation, categoriesValidation, categoriesController.categoriesPost);

module.exports = router;