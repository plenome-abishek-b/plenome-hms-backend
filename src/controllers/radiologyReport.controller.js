const RadiologyReportController = require('../models/radiologyReport.model')

exports.getreport = (req,res)=>{
    RadiologyReportController.getreport ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('Bill Detail  ',med);
        res.send(med);
    })

}


exports.createreport = (req,res) =>{
    let detailsData = req.body;
    if (!Array.isArray(detailsData)) {
        detailsData = [detailsData];
      }
      const insertData = detailsData.map((data) => new RadiologyReportController(data)
      );
      RadiologyReportController.createreport(insertData, (err, detail) => {
        if (err) {
          res.send(err);
        } else {
          const ids = detail.map((item) => item.insertId);  
          res.json({ status: true, message: 'detail added successfully', data: ids });
        }
      });
}