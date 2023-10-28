const TPA_management_model = require('../models/TPAManagement.model');

exports.getTPA_management = (req,res)=>{
    let updatedquery = 'select * from organisation'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from organisation where id = ?'
        updatedvalues.push(req.query.search);
        updatedvalues.push(req.query.search);
        updatedvalues.push(req.query.search);
        updatedvalues.push(req.query.search);
        updatedvalues.push(req.query.search);
        updatedvalues.push(req.query.search);
    }

    TPA_management_model.setquery(updatedquery,updatedvalues)
    TPA_management_model.getTPA_management((err,TPA)=>{
        if(err)
        res.send(err);

        console.log('organisation fetched',TPA);
        res.send(TPA);
    })
}

exports.createTPA_management = (req,res)=>{
    const TPAdata = new TPA_management_model(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        TPA_management_model.createTPA_management(TPAdata,(err,TPA)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'organisation added successfully',data:TPA.insertId});
        })
    }
}

exports.updateTPA_management = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update organisation SET ? where id = ?'
        updatedvalues.push(req.query.id)
    }

    TPA_management_model.setquery(updatedquery,updatedvalues)
    const organisationupdatedata = new TPA_management_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        TPA_management_model.updatedTPA_management(organisationupdatedata,(err,TPA)=>{
            if(err){
                res.send(err);
            }else{
                if(organisationupdatedata.id == updatedvalues[0]){
                    res.json({status:true,message:'organisation updated successfully',data:organisationupdatedata.id});
                }
                else{
                    res.json({status:false,message:'post value and id should be same'});

                }
            }
        })
    }
}