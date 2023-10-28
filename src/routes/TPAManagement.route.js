const express = require('express');

const router = express.Router();

const TPA_managementController = require('../controllers/TPAManagement.controller');
router.get('/',TPA_managementController.getTPA_management);
router.post('/',TPA_managementController.createTPA_management);
router.put('/',TPA_managementController.updateTPA_management);

module.exports = router;