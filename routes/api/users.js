const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)
// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/info/:username', ensureLoggedIn, usersCtrl.getInfo)

module.exports = router