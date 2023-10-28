const express = require('express');

const router = express.Router();

const GraphController = require('../controllers/graph.controller')
router.get('/',GraphController.getGraph)
module.exports = router