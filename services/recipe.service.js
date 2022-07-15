var Recipe = require('../models/Recipe.model');

_this = this

exports.getTopRecipes = async function (limit) {
    try {
        var Recipes = await Recipe.find().limit(limit);
        return Recipes;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while getting Top Recipes');
    }
}

exports.getRecipes = async function (query, page, limit, searchQuery) {
    var per_page = parseInt(req.query.per_page) || 10
    var page_no = parseInt(req.query.page_no) || 1
    var pagination = {
        limit: per_page,
        skip: per_page * (page_no - 1)
    }
    try {
        console.log("Query", query);
        var recipes = await Recipe.find({
            category: searchQuery // CHECK This
        }).limit(pagination.limit).skip(pagination.skip).exec()
        return recipes;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while searching a recipe');
    }
}

exports.createRecipe = async function (recipe) {
    var newRecipe = new Recipe({
        //TODO
        //recipe: user.recipeId
    });

    try {
        var savedRecipe = await newRecipe.save();
        return savedRecipe._id;
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Recipe");
    }
}

exports.deleteRecipe = async function (recipe) {
    try {
        var recipe = await Recipe.findById(recipe);
        recipe.isActive = false;
        return recipe._id;
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Recipe");
    }
}

exports.createRating = async function (user) {
    return 1;
    /*var newRating = new Rating({
        recipe: user.recipeId,
        rating: user.rating
    });

    try {
        var savedRating = await newRating.save();
        return savedRating._id;
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Rating");
    }*/
}