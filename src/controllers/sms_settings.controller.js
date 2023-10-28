//const sms_settings = require('../models/sms_settings.model');
const sms_settings_model = require('../models/sms_settings.model');

exports.getsms_settings = (req,res)=>{
    let updatedquery = 'select * from sms_config'
    let updatedvalues = [];

    sms_settings_model.setquery(updatedquery,updatedvalues)
    sms_settings_model.getsms_settings((err,sms)=>{
        if(err)
        res.send(err);

        console.log('sms settings fetched',sms);
        res.send(sms);
    })
}

exports.createsms_settings = (req,res)=>{
    const smsdata = new sms_settings_model(req.body);

    if(req.body,constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        sms_settings_model.createsms_settings(smsdata,(err,sms)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'sms settings added successfully',data:sms.insertId});

        })
    }
}

exports.updatesms_settings = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update sms_config SET? where id = ?'
        updatedvalues.push(req.query.id)
    }
    sms_settings_model.setquery(updatedquery,updatedvalues)
    const smsupdatedata = new sms_settings_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        sms_settings_model.updatesms_settings(smsupdatedata,(err,sms)=>{
            if(err){
                res.send(err);
            }else{
                if(smsupdatedata.id == updatedvalues[0]){
                    res.json({status:true,message:'sms confid updated successfully',data:smsupdatedata.id});

                }else{
                    res.json({status:false,message:'post value and id should be same'})
                }
            }
        })
    }
}