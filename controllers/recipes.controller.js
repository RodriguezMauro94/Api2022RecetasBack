var RecipeService = require('../services/recipe.service');

_this = this;

exports.getDetails = async function (req, res, next) {
    try {
        let filtro= {id: req.params.id}
        var recipe = await RecipeService.getRecipe(filtro, 1, 1);
        return res.status(200).json({status: 200, data: recipe, message: "Succesfully Recipe Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRecipe = async function (req, res, next) {
    var recipe = {
        name: req.body.recipe.name,
        description: req.body.recipe.description,
        urlImage: req.body.recipe.urlImage,
        ingredients: req.body.recipe.ingredients,
        difficulty: req.body.recipe.difficulty,
        vegan: req.body.recipe.vegan,
        celiac: req.body.recipe.celiac,
        user: req.body.recipe.user,
        steps: req.body.recipe.steps,
        category: req.body.recipe.category
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
    let recipe = req.body.recipe.id;
    try {
        var createdRecipe = await RecipeService.deleteRecipe(recipe)
        return res.status(201).json({createdRecipe, message: "Succesfully Deleted Recipe"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Recipe deletion was Unsuccesfull"})
    }
}

exports.getTopRecipes = async function (req, res, next) {
    var limit = 10;
    try {
        var topRecipes = await RecipeService.getTopRecipes(limit);
        return res.status(200).json({status: 200, data: topRecipes, message: "Succesfully Top Recipes Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getRecipes = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let searchQuery = {
        description: req.query.description ? req.query.description : ""
    }

    try {
        var recipes = await RecipeService.getRecipes({}, page, limit, searchQuery);
        return res.status(200).json({status: 200, data: recipes, message: "Succesfully Recipes Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.filterRecipes = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let searchQuery = {
        description: req.query.description ? req.query.description : "",
        category: req.query.category ? req.query.category : "",
        difficulty: req.query.difficulty ? req.query.difficulty : "",
        vegan: req.query.vegan,
        celiac: req.query.celiac,
    }

    try {
        var recipes = await RecipeService.filterRecipes({}, page, limit, searchQuery);
        return res.status(200).json({status: 200, data: recipes, message: "Succesfully Recipes Filtered"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.postRating = async function (req, res, next) {
    var Rating = {
        user: req.body.rating.user,
        rating: req.body.rating.rating,
        recipeId: req.body.rating.recipeId
    }
    try {
        var updatedRecipe = await RecipeService.createRating(Rating)
        return res.status(201).json({updatedRecipe, message: "Succesfully posted rating"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "Posting rating was Unsuccesfull"})
    }
}