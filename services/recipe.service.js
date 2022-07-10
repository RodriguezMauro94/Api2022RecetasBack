// Gettign the Newly created Mongoose Model we just created 
var Recipe = require('../models/Recipe.model');

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
        console.log("Query",query)
        var Recipes = await Recipe.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Recipes;
    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}
