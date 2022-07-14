var Difficulty = require('../models/Difficulty.model');

_this = this

exports.getDifficulties = async function () {
    try {
        var difficulties = await Difficulty.find({});
        return difficulties;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while getting difficulties');
    }
}
