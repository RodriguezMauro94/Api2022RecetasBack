var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var StepsRecipeSchema = new mongoose.Schema({
    recipe: {type: mongoose.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: String
});

StepsRecipeSchema.plugin(mongoosePaginate);
const StepsRecipe = mongoose.model('StepsRecipe', StepsRecipeSchema);

module.exports = StepsRecipe;