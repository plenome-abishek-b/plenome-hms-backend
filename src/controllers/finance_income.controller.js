const finance_income_model = require('../models/finance_income.model');

exports.getfinance_income = (req,res)=>{
    let updatedquery = 'select income.* ,income_head.income_category from income join income_head on income_head.id = income.inc_head_id'
    let updatedvalues =[];

    if(req.query.search){
        updatedquery += ' where income.name like ? or income.invoice_no like ? or income.note like ? or income_head.income_category like ? '
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");

        
    }

    finance_income_model.setquery(updatedquery,updatedvalues)
    finance_income_model.getfinance_income((err,income)=>{
        if(err)
        res.send(err);

        console.log('income fetched',income);
        res.send(income);
    })
}

exports.createfinance_income = (req,res)=>{
    const incomedata = new finance_income_model(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        finance_income_model.createfinance_income(incomedata,(err,income)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'income added successfully',data:income.insertId});

        })
    }
}

exports.updatefinance_income = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update income SET ? where id = ?'
        updatedvalues.push(req.query.id)
    }

    finance_income_model.setquery(updatedquery,updatedvalues)
    const incomeupdatedata = new finance_income_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        finance_income_model.updatefinance_income(incomeupdatedata,(err,income)=>{
            if(err){
                res.send(err);
            }else{
                if(incomeupdatedata.id == updatedvalues[0]){
                    res.json({status:true,message:'income updated successfully',data:income.id});

                }else{
                    res.json({status:false,message:'post value and id should be same'});
                    
                }
            }
        })
    }
}