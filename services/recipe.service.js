// Gettign the Newly created Mongoose Model we just created 
var Recipe = require('../models/Recipe.model');
var Rating = require('../models/Rating.model');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getTopRecipes = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query", query);
        var Recipes = await Recipe.paginate(query, options);
        // Return the Userd list that was retured by the mongoose promise
        return Recipes;
    } catch (e) {
        // return a Error message describing the reason 
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
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query", query);
        var recipes = await Recipe.find({
            category: searchQuery // CHECK This
        }).limit(pagination.limit).skip(pagination.skip).exec()
        return recipes;
    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services", e);
        throw Error('Error while searching a recipe');
    }
}

exports.createRating = async function (user) {
    var newRating = new Rating({
        recipe: user.recipeId,
        rating: user.rating
    });

    try {
        var savedRating = await newRating.save();
        return savedRating._id;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e);
        throw Error("Error while Creating Rating");
    }
}