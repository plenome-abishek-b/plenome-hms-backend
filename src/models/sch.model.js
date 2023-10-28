var dbConn = require('../../config/db.config');

var Schsetting = function(sch){
    this.id = sch.id;
    this.name = sch.name;
    this.email = sch.email;
    this.phone = sch.phone;
    this.address = sch.address;
    this.start_month = sch.start_month;
    this.session_id = sch.session_id;
    this.lang_id = sch.lang_id;
    this.languages = sch.languages;
    this.dise_code = sch.dise_code;
    this.date_format = sch.date_format;
    this.time_format = sch.time_format;
    this.currency = sch.currency;
    this.currency_symbol = sch.currency_symbol;
    this.is_rtl = sch.is_rtl;
    this.timezone = sch.timezone;
    this.image = sch.image;
    this.mini_logo = sch.mini_logo;
    this.theme = sch.theme;
    this.credit_limit = sch.credit_limit;
    this.opd_record_month = sch.opd_record_month;
    this.is_active = sch.is_active;
    this.cron_secret_key = sch.cron_secret_key;
    this.doctor_restriction = sch.doctor_restriction;
    this.superadmin_restriction = sch.superadmin_restriction;
    this.patient_panel = sch.patient_panel;
    this.mobile_api_url = sch.mobile_api_url;
    this.app_primary_color_code = sch.app_primary_color_code;
    this.app_secondary_color_code = sch.app_secondary_color_code;
    this.app_logo = sch.app_logo;
    this.zoom_api_key = sch.zoom_api_key;
    this.zoom_api_secret = sch.zoom_api_secret;
    this.created_at = sch.created_at;
  }


  Schsetting.getschdetails = (result)=>{
    dbConn.query('select * from sch_settings',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('sch_Settings details fetched ');
            result(null,res);
        }
    })
}


Schsetting.createschdetails = (schData,result)=>{
    dbConn.query('insert into sch_settings SET ?',schData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('sch settings Data inserted Successfully');
            result(null,res)
        }
    
    });
}

module.exports = Schsetting;


