const express = require('express');
const router = express.Router();

const frontOfficeVisitorsBookController = require('../controllers/frontoffice.visitors_book.controller');



//Add new visitors details 

router.post('/',frontOfficeVisitorsBookController.createVisitorsBook);

//get visitors detail list

router.get('/',frontOfficeVisitorsBookController.getVisitorsBookList);



module.exports = router;