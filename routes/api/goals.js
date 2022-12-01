const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/goals
router.get('/', ensureLoggedIn, goalsCtrl.index);
// GET /api/goals/:id
router.get('/:id', ensureLoggedIn, goalsCtrl.show);
// POST /api/goals/add
router.post('/add', ensureLoggedIn, goalsCtrl.create);
// PUT /api/goals/:id
router.put('/:id', ensureLoggedIn, goalsCtrl.edit);
// DELETE /api/goals/:id
router.delete('/:id', ensureLoggedIn, goalsCtrl.delete);


module.exports = router;