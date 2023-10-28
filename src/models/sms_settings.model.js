var dbconn = require('../../config/db.config');
var sms_settings = function(sms){
    this.id = sms.id;
    this.type = sms.type;
    this.name = sms.name;
    this.api_id = sms.api_id;
    this.authkey = sms.authkey;
    this.senderid = sms.senderid;
    this.contact = sms.contact;
    this.username = sms.username;
    this.url = sms.url; 
    this.password = sms.password;
    this.is_active = sms.is_active;
    this.created_at = sms.created_at;
}

let query = ''
let values = []
sms_settings.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values= updatedvalues;
}

sms_settings.getsms_settings = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('sms settings fetched');
            result(null,res);
        }
    })
}

sms_settings.createsms_settings = (sms_settings,result)=>{
    dbconn.query('insert into sms_config SET ?',sms_settings,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('sms config inserted successfully');
            result(null,res);
        }
    })
}


sms_settings.updatesms_settings = (sms_settingsupdatedata,result)=>{
    dbconn.query(query,[sms_settingsupdatedata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while updating data');
            result(null,err);
        }else{
            console.log('sms config data updated successfully');
            result(null,res)
        }
    });
}

module.exports = sms_settings;