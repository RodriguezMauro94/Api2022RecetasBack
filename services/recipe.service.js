var Recipe = require('../models/Recipe.model');
var mongoose = require('mongoose');

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
        name: recipe.name,
        description: recipe.description,
        urlImage: recipe.urlImage,
        ingredients: recipe.ingredients,
        difficulty: recipe.difficulty,
        vegan: recipe.vegan,
        celiac: recipe.celiac,
        user: recipe.user,
        steps: recipe.steps,
        category: recipe.category,
        isActive: true
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

exports.createRating = async function (rating) {
    let userId = mongoose.Types.ObjectId(rating.user);
    var newRating = {
        user: userId,
        rating: rating.rating
    }

    try {
        let recipeId = mongoose.Types.ObjectId(rating.recipeId);
        var recipe = await Recipe.findOne(recipeId);

    } catch (e) {
        throw Error("Error occured while Finding the Recipe")
    }
    if (!recipe) {
        return false;
    }
    recipe.rating.push(newRating);
    try {
        var savedRecipe = await recipe.save()
        return savedRecipe;
    } catch (e) {
        throw Error("And Error occured while adding a rating");
    }
}