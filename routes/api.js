/**ROUTE USER APIs. */
var express = require('express');

var router = express.Router();
var users = require('./api/user.route');
var recipes = require('./api/recipe.route');
var categories = require('./api/category.route');
var difficulty = require('./api/difficulty.route');

router.use('/users', users);
router.use('/recipes', recipes);
router.use('/categories', categories);
router.use('/difficulties', difficulty);

module.exports = router;
