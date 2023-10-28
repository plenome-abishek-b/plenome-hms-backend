const BillDetailModel = require('../models/pharmacyBillDetails.model');

exports.getBillDetails = (req,res)=>{
    BillDetailModel.getBillDetails ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('Bill Detail  ',med);
        res.send(med);
    })

}


exports.createDetail = (req,res) =>{
    let detailsData = req.body;
    if (!Array.isArray(detailsData)) {
        detailsData = [detailsData];
      }
      const insertData = detailsData.map((data) => new BillDetailModel(data)
      );
      BillDetailModel.createBillDetails(insertData, (err, detail) => {
        if (err) {
          res.send(err);
        } else {
          const ids = detail.map((item) => item.insertId);  
          res.json({ status: true, message: 'detail added successfully', data: ids });
        }
      });
}