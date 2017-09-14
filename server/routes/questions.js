var express = require('express');
var router = express.Router();
var controller = require('../controllers/questionController')
var authorized = require('../helpers/auth')

/* GET users listing. */
router.get('/', controller.getAllQuestions);
router.get('/:id', controller.getQuestionById);
router.post('/', controller.addQuestion);
router.delete('/:id', controller.deleteQuestion);
router.put('/:id', controller.editQuestion);

module.exports = router;
