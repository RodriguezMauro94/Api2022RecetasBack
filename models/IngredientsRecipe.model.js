var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var IngredientsRecipeSchema = new mongoose.Schema({
    recipe: {type: mongoose.Types.ObjectId, required: true},
    description: {type: String, required: true}
});

IngredientsRecipeSchema.plugin(mongoosePaginate);
const IngredientsRecipe = mongoose.model('IngredientsRecipe', IngredientsRecipeSchema);

module.exports = IngredientsRecipe;