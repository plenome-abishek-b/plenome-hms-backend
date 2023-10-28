const express = require('express');

const router = express.Router();

const rolecontroller = require('../controllers/roles.controller');
router.get('/',rolecontroller.getroles);
router.get('/:name',rolecontroller.getrolesByname);
router.post('/',rolecontroller.createRole);
module.exports = router;