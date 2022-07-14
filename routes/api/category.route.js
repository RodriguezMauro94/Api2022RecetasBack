var express = require('express')
var router = express.Router()
var CategoryController = require('../../controllers/category.controller');

router.get('/', CategoryController.getCategories);

module.exports = router;
