var referralCategoryModel = require('../models/referralCategory.model');

exports.getReferralCategoryName = (req,res)=>{
    let updatedquery = 'select * from referral_category'
    let updatedvalues = [];

    if(req.query.id){
        updatedquery = 'select * from referral_category'
        updatedvalues.push(req.query.id);
    }

    referralCategoryModel.setvalues(updatedquery,updatedvalues);
    referralCategoryModel.getReferralCategoryName((err,Type)=>{
        if(err)
        res.send(err);

        console.log('Type is needed',Type);
        res.send(Type);
    })
}
