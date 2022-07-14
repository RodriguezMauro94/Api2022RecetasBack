/**ROUTE USER APIs. */
var express = require('express');

var router = express.Router();
var users = require('./api/user.route');
var recipes = require('./api/recipe.route');
var categories = require('./api/category.route');

router.use('/users', users);
router.use('/recipes', recipes);
router.use('/categories', categories);

module.exports = router;
