var dbConn = require('../../config/db.config');

var EmailSetting = function(emailSetting){
    this.id = emailSetting.id;
    this.email_type = emailSetting.email_type;
    this.smtp_server = emailSetting.smtp_server;
    this.smtp_port = emailSetting.smtp_port
    this.smtp_username = emailSetting.smtp_username;
    this.smtp_password = emailSetting.smtp_password;
    this.ssl_tls = emailSetting.ssl_tls;
    this.smtp_auth = emailSetting.smtp_auth;
    // this.is_active = emailSetting.is_active;
    this.created_at = emailSetting.created_at
}

EmailSetting.createEmailSetting = (emailData,result)=>{
    dbConn.query('insert into email_config set ?',emailData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('Email Setting  inserted Successfully');
            result(null,res)
        }
    })
}

let query = ''
let value = []

EmailSetting.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

EmailSetting.getEmailSetting = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Email Setting  fetched ');
            result(null,res);
        }
    })
}


EmailSetting.updateEmailSetting = (EmailSettingData,result)=>{
    dbConn.query(query,[EmailSettingData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('Email Setting Data updated Successfully');
            result(null,res)
        }
    });
}


module.exports = EmailSetting;