var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var DifficultySchema = new mongoose.Schema({
    difficulty: {type: String, required: true},
    description: {type: String, required: true}
});

DifficultySchema.plugin(mongoosePaginate);
const Difficulty = mongoose.model('Difficulty', DifficultySchema);

module.exports = Difficulty;