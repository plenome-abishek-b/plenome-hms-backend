const express = require('express');

const router = express.Router();

const referralperson_controller = require('../controllers/referralperson.controller');
router.get('/',referralperson_controller.getreferralperson);
router.post('/',referralperson_controller.createreferralperson);
router.get('/:name',referralperson_controller.getreferralpersonByname);

module.exports = router;