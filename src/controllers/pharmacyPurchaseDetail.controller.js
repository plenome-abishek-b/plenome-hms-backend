const PharmacyPurchaseDetailModel = require('../models/pharmacyPurchaseDetail.model');

exports.createDetail = (req,res) =>{
    let detailsData = req.body;
    if (!Array.isArray(detailsData)) {
        detailsData = [detailsData];
      }
      const insertData = detailsData.map((data) => {
        return new PharmacyPurchaseDetailModel(data);
      });
      PharmacyPurchaseDetailModel.createDetails(insertData, (err, detail) => {
        if (err) {
          res.send(err);
        } else {
          const ids = detail.map((item) => item.insertId);  
          res.json({ status: true, message: 'detail added successfully', data: ids });
        }
      });
}

exports.getPurchaseDetails = (req,res)=>{
  PharmacyPurchaseDetailModel.getPurchaseDetails ((err,med)=>{
      if(err)
      res.send(err);
   
      console.log('PharmacyPurchaseDetail ',med);
      res.send(med);
  })

}