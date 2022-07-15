var express = require('express')
var router = express.Router()
var RecipeController = require('../../controllers/recipes.controller');

router.get('/details/:id', RecipeController.getRecipe);
router.post('/create/', RecipeController.createRecipe);
router.delete('/delete/:id', RecipeController.deleteRecipe);
router.get('/getTopRecipes/', RecipeController.getTopRecipes);
router.get('/getRecipes/:searchQuery', RecipeController.getRecipes);
router.post('/rating', RecipeController.postRating);

module.exports = router;
