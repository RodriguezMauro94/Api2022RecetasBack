var RecipeService = require('../services/recipe.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getTopRecipes = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var topRecipes = await RecipeService.getTopRecipes({}, page, limit)
        // Return the Top Recipes list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: topRecipes, message: "Succesfully Top Recipes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
