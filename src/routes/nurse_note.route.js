const express = require('express');

const router = express.Router();
nurse_note_controller = require('../controllers/nurse_note.controller');
router.post('/',nurse_note_controller.createNurse_note);
router.get('/',nurse_note_controller.getNurse_note);
module.exports = router;