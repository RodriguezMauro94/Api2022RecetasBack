var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var RecipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    urlImage: {type: String, required: true},
    ingredients: {type: Array, "default": [] },
    ratings: {type: Int32, required: true},
    difficulty: {type: String, required: true},
    vegan: {type: Boolean, default: false},
    celiac: {type: Boolean, default: false},
    user: {type: mongoose.Types.ObjectId, required: true},
    steps: {type: Array, "default": [] },
    category: {type: mongoose.Types.ObjectId, required: true},
    rating: {type: Array, "default": [] }
    
});

RecipeSchema.plugin(mongoosePaginate);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;