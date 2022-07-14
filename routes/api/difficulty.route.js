var express = require('express')
var router = express.Router()
var DifficultyController = require('../../controllers/difficulty.controller');

router.get('/', DifficultyController.getDifficulties);

module.exports = router;
