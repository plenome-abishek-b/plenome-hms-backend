const income_head = require('../models/finance_income_head.model');
exports.getincome_head = (req,res)=>{
    let updatedquery = 'select * from income_head'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from income_head where income_category like ?'
        updatedvalues.push("%"+req.query.search+"%");
    }

    income_head.setquery(updatedquery,updatedvalues)
    income_head.getincome_head((err,income)=>{
        if(err)
        res.send(err);

        console.log('income head generated',income);
        res.send(income);
    })
}

exports.createincome_head = (req,res)=>{
    const incomedata = new income_head(req.body);
    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        income_head.createincome_head(incomedata,(err,income)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'income head added successfully',data:income.insertId});
        })
    }
}