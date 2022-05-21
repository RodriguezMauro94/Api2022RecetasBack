var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var RecipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: mongoose.Types.ObjectId, required: true},
    difficulty: {type: mongoose.Types.ObjectId, required: true},
    user: {type: mongoose.Types.ObjectId, required: true},
    image: String,
    vegan: {type: Boolean, default: false},
    celiac: {type: Boolean, default: false}
});

RecipeSchema.plugin(mongoosePaginate);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;