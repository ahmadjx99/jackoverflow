var express = require('express');
var router = express.Router();
var controller = require('../controllers/answervoteController')
var authorized = require('../helpers/auth')

router.get('/', controller.getVotes);
router.post('/', controller.createVote);

module.exports = router
