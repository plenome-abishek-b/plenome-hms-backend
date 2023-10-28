const express = require('express');

const router = express.Router();
const certificateController = require('../controllers/certificate.controller');
router.post('/',certificateController.createCretificate);
router.get('/',certificateController.getCertificate);
module.exports = router;