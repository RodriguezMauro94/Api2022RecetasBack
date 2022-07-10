var express = require('express')
var router = express.Router()
var RecipeController = require('../../controllers/recipes.controller');

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/getTopRecipes', RecipeController.getTopRecipes);
router.get('/getRecipes/:searchQuery', RecipeController.getRecipes);
router.post('/rating', RecipeController.postRating);

// Export the Router
module.exports = router;
