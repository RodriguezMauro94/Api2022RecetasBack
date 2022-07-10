var express = require('express')
var router = express.Router()
var RecipeController = require('../../controllers/recipe.controller');
var Authorization = require('../../auth/authorization');

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/getTopRecipes', RecipeController.getTopRecipes);

// Export the Router
module.exports = router;
