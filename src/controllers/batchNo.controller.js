const BatchNomodel = require('../models/batchNo.model');
exports.getName = (req,res)=>{
    let updatedQuery = 'select * from medicine_batch_details  ';
    let updatedValue = []

    if(req.query.medName){
        updatedQuery += 'where pharmacy_id = ?';
        updatedValue.push(req.query.medName);
    }

    if(req.query.BatchNo){
        updatedQuery += 'and batch_no = ?';
        updatedValue.push(req.query.BatchNo)
    }

    BatchNomodel.setQuery(updatedQuery,updatedValue);
    BatchNomodel.getBatch((err,batch)=>{
        if(err)
        res.send(err);

        console.log('batch  ',batch);
        res.send(batch);
    })

}