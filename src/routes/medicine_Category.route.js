const express = require('express');

const router = express.Router();

const MedicineDosageController = require('../controllers/medicine_Category.controller');
router.get('/',MedicineDosageController.getMedicineDosage);
router.post('/',MedicineDosageController.createMedicineDosage);
module.exports = router;