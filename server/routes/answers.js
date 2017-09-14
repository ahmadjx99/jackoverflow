var express = require('express');
var router = express.Router();
var controller = require('../controllers/answerController')
var authorized = require('../helpers/auth')

router.get('/', controller.getAllAnswers);
router.get('/:id', authorized.adminAuthUser, controller.getAnswerById);
router.post('/', controller.createAnswer);
router.delete('/:id', controller.deleteAnswer);


module.exports = router;
