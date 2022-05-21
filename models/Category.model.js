var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var CategorySchema = new mongoose.Schema({
    description: {type: String, required: true}
});

CategorySchema.plugin(mongoosePaginate);
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;