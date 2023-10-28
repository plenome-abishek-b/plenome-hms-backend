const issue_tomodel = require('../models/inventory_issue_to.model');
exports.getissue_to = (req,res)=>{
    issue_tomodel.getissue_to((err,issue_to)=>{
        if(err)
        res.send(err);

        console.log('issue to',issue_to);
        res.send(issue_to);
    })
}