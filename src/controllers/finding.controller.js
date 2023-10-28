const FindingModel = require('../models/finding.model');
exports.getFinding = (req,res)=>{
    let updatedQuery = 'select * from finding ';
    let updatedValue = []

    if(req.query.category){
        updatedQuery = 'select finding.*,finding_category.category from finding join finding_category on finding_category.id = finding.finding_category_id where finding_category_id = ?';
        updatedValue.push(req.query.category);
    }

    FindingModel.setQuery(updatedQuery,updatedValue);
    FindingModel.getFinding((err,finding)=>{
        if(err)
        res.send(err);

        console.log('finding names ',finding);
        res.send(finding);
    })

}  