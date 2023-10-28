const EmailSettingModel = require('../models/emailSettings.model')


exports.createEmailSetting = (req,res)=>{
    const emailData = new EmailSettingModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        EmailSettingModel.createEmailSetting (emailData,(err,email)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'  Email Setting added successfully',data:email.insertId});

        })
    }
}


exports.getEmailSetting= (req,res)=>{

    let updatedQuery = 'select * from email_config '
    let updatedValue = []
  
    
    EmailSettingModel.setQuery(updatedQuery,updatedValue)
    EmailSettingModel.getEmailSetting ((err,email)=>{
            if(err)
            res.send(err);
         
            console.log('email ',email);
            res.send(email);
        })
    }



exports.updateBedList = (req,res)=>{

    let updatedQuery = '';
    let updatedValues = []

    if(req.query.id){
        updatedQuery = 'update  email_config SET? where email_config.id = ?'
        updatedValues.push(req.query.id)
    }
    EmailSettingModel.setQuery(updatedQuery,updatedValues)
    const EmailSettingUpdateData = new EmailSettingModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        EmailSettingModel.updateEmailSetting(EmailSettingUpdateData,(err,EmailSetting)=>{
            if(err){
            res.send(err);
        }else{
            if(EmailSettingUpdateData.id == updatedValues[0]){

                res.json({status:true,message:' Email Setting List updated successfully',data:EmailSettingUpdateData.id});
            }
            else{
                res.json({status:false,message:'the id of the post value and the id given must be same'})
            }

        }
        })
    }
}
