var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var authorized = require('../helpers/auth')

/* GET users listing. */
router.get('/', controller.getAllUsers);
router.get('/:id', authorized.adminOnly, controller.getUserById);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.delete('/:id', controller.removeUserById);

module.exports = router;
