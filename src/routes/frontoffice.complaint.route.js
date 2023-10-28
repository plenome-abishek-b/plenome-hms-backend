const express = require('express');
const router = express.Router();

const frontOfficeComplaintController = require('../controllers/frontoffice.complaint.controller');



//Add new complaint details

router.post('/',frontOfficeComplaintController.createComplaint);

//get complaint detail list

router.get('/',frontOfficeComplaintController.getComplaintList);



module.exports = router;