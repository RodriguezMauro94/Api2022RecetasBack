var Category = require('../models/Category.model');

_this = this

exports.getCategories = async function () {
    try {
        var categories = await Category.find({});
        return categories;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while getting categories');
    }
}
