var Recipe = require('../models/Recipe.model');
var mongoose = require('mongoose');
const { authenticate } = require('./auth.service');

_this = this

exports.getRecipe = async function (recipe) {
    try {
        let recipeId = mongoose.Types.ObjectId(recipe.id);
        var recipe = await Recipe.findById(recipeId);
        return [recipe];
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while getting Recipe');
    }
}

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
    var per_page = parseInt(limit) || 10
    var page_no = parseInt(page) || 1
    var pagination = {
        limit: per_page,
        skip: per_page * (page_no - 1)
    }
    try {
        console.log("Query", query);
        var recipes = await Recipe.find({
            $or: [
                { description: { $regex: searchQuery.description } },
                { 'ingredients.ingredient': { $regex: searchQuery.description } },
                { category: searchQuery.description }
            ]
        }).limit(pagination.limit).skip(pagination.skip).exec()
        return recipes;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while searching a recipe');
    }
}

exports.filterRecipes = async function (query, page, limit, searchQuery) {
    var per_page = parseInt(limit) || 10
    var page_no = parseInt(page) || 1
    var pagination = {
        limit: per_page,
        skip: per_page * (page_no - 1)
    }
    try {
        console.log("Query", query);
        var recipes = await Recipe.find({
            $and: [
                searchQuery.description ? {
                    $or: [
                        { description: { $regex: searchQuery.description } },
                        { 'ingredients.ingredient': { $regex: searchQuery.description } }
                    ]
                } : {},
                searchQuery.category ? { category: searchQuery.category } : {},
                searchQuery.difficulty ? { difficulty: searchQuery.difficulty } : {},
                searchQuery.vegan ? { vegan: searchQuery.vegan } : {},
                searchQuery.celiac ? { celiac: searchQuery.celiac } : {}
            ]
        }).limit(pagination.limit).skip(pagination.skip).exec()
        return recipes;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while searching a recipe');
    }
}

exports.createRecipe = async function (recipe) {

    var decode = await authenticate(recipe.user);

    var newRecipe = new Recipe({
        name: recipe.name,
        description: recipe.description,
        urlImage: recipe.urlImage,
        ingredients: recipe.ingredients,
        difficulty: recipe.difficulty,
        vegan: recipe.vegan,
        celiac: recipe.celiac,
        user: decode.id,
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

exports.deleteRecipe = async function (recipe, token) {
    try {
        await authenticate(token);

        let recipeId = mongoose.Types.ObjectId(recipe);
        var recipe = await Recipe.findById(recipeId);
        recipe.isActive = false;
        return recipe._id;
    } catch (e) {
        console.log(e);
        throw Error("Error while Creating Recipe");
    }
}

exports.createRating = async function (rating) {
    var decode = await authenticate(recipe.user);
    var newRating = {
        user: decode.id,
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