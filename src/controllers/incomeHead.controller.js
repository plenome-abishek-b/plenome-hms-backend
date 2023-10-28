const IncomeHeadModel = require('../models/incomeHead.model');

exports.getIncomeHead = (req,res)=>{
    IncomeHeadModel.getIncomeHead((err,IncomeHead)=>{

      
        if(err)
        res.send(err);
     
        console.log('IncomeHead ',IncomeHead);
        res.send(IncomeHead);
    
    })
}