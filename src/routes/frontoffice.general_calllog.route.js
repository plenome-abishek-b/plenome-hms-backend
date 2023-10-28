const express = require('express');
const router = express.Router();

const frontOfficeCallLogController = require('../controllers/frontoffice.general_calllog.controller');



//Add new call log 

router.post('/',frontOfficeCallLogController.createCallLog);

//get call log detail list

router.get('/',frontOfficeCallLogController.getCallLogList);



module.exports = router;