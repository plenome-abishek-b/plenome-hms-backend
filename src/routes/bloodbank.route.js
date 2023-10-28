const express = require('express');

const router = express.Router();
const bloodbankController = require('../controllers/bloodbank.controller');
router.post('/',bloodbankController.createProduct);
router.get('/',bloodbankController.getProduct);
router.put('/:id', bloodbankController.updateProduct);
// Delete unit type
router.delete('/:id', bloodbankController.deleteProduct);
module.exports = router;