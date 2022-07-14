var CategoriesService = require('../services/category.service');

_this = this;

exports.getCategories = async function (req, res, next) {
    try {
        var categories = await CategoriesService.getCategories();
        return res.status(200).json({status: 200, data: categories, message: "Succesfully Categories Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
