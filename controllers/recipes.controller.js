var RecipeService = require('../services/recipe.service');

_this = this;

exports.getRecipe = async function (req, res, next) {
    try {
        let filtro= {_id: req.body.id}
        var recipe = await RecipeService.getRecipes(filtro, 1, 1);
        return res.status(200).json({status: 200, data: recipe, message: "Succesfully Recipe Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRecipe = async function (req, res, next) {
    var recipe = {
        //TODO
        /*name: req.body.name,
        email: req.body.email,
        password: req.body.password*/
    }
    try {
        var createdRecipe = await RecipeService.createRecipe(recipe)
        return res.status(201).json({createdRecipe, message: "Succesfully Created Recipe"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Recipe creation was Unsuccesfull"})
    }
}

exports.deleteRecipe = async function (req, res, next) {
    let recipe = req.body.id;
    try {
        var createdRecipe = await RecipeService.deleteRecipe(recipe)
        return res.status(201).json({createdRecipe, message: "Succesfully Deleted Recipe"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Recipe deletion was Unsuccesfull"})
    }
}

exports.getTopRecipes = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var topRecipes = await RecipeService.getTopRecipes({}, page, limit);
        return res.status(200).json({status: 200, data: topRecipes, message: "Succesfully Top Recipes Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getRecipes = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    var searchQuery = req.params.searchQuery;

    try {
        var recipes = await RecipeService.getRecipes({}, page, limit, searchQuery);
        return res.status(200).json({status: 200, data: recipes, message: "Succesfully Recipes Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.postRating = async function (req, res, next) {
    var Rating = {
        user: req.body.user,
        rating: req.body.rating,
        recipeId: req.body.recipeId
    }
    try {
        var createdUser = await RecipeService.createRating(Rating)
        return res.status(201).json({createdUser, message: "Succesfully posted rating"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Posting rating was Unsuccesfull"})
    }
}