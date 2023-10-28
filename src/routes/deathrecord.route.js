const express = require('express');

const router = express.Router();

const deathrecord_controller = require('../controllers/deathrecord.controller');
router.get('/',deathrecord_controller.getdeathrecord);
router.post('/',deathrecord_controller.createdeathrecord);
router.get('/:patient_id',deathrecord_controller.getrecordByname);

module.exports = router;