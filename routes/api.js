/**ROUTE USER APIs. */
var express = require('express');

var router = express.Router();
var users = require('./api/user.route');
var recipes = require('./api/recipe.route');

router.use('/users', users);
router.use('/recipes', recipes);

module.exports = router;
