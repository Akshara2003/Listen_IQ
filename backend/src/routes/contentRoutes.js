const express = require('express');
const router = express.Router();
const ContentCtrl = require('../controllers/contentCtrl');

// Routes
router.get('/all', ContentCtrl.getAllContent);
router.post('/upload', ContentCtrl.uploadContent);
router.put('/:id', ContentCtrl.editContent);
router.delete('/:id', ContentCtrl.deleteContent);

module.exports = router;