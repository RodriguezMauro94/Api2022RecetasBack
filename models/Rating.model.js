var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var RatingSchema = new mongoose.Schema({
    recipe: {type: mongoose.Types.ObjectId, required: true},
    rating: {type: Number, required: true}
});

RatingSchema.plugin(mongoosePaginate);
const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;