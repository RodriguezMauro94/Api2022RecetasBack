var DifficultyService = require('../services/difficulty.service');

_this = this;

exports.getDifficulties = async function (req, res, next) {
    try {
        var difficulties = await DifficultyService.getDifficulties();
        return res.status(200).json({status: 200, data: difficulties, message: "Succesfully Difficulties Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
