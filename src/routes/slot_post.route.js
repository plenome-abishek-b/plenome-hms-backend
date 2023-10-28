const express = require('express');

const router = express.Router();

const slot_postController = require('../controllers/slot_post.controller');
router.get('/',slot_postController.getslot_post);
router.post('/',slot_postController.createslot_post);
router.put('/',slot_postController.updatedslot_post);

module.exports = router;