const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

// GET /api/items
router.get('/', goalsCtrl.index);
// GET /api/items/:id
router.get('/:id', goalsCtrl.show);

module.exports = router;