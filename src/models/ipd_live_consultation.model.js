var dbConn = require('../../config/db.config');
var Live_consultation = function(live_consultation){
    this.id = live_consultation.id;
    this.consultation_title = live_consultation.consultation_title;
    this.date = live_consultation.consultation_title;
    this.created_by = live_consultation.created_by;
    this.created_for = live_consultation.created_by;
    this.ipd_id = live_consultation.ipd_id;
    this.opd_id = live_consultation.opd_id;
    this.appointment_id = live_consultation.appointment_id;
    this.patient_id = live_consultation.patient_id;
    this.doctor_id = live_consultation.doctor_id;
    this.status = live_consultation.status;
    this.created_at = live_consultation.created_at;
}
Live_consultation.get_live_consultation = (result)=>{
    dbConn.query('select * from live_consultation',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('live consultation  fetched ');
            result(null,res);
        }
    })
}

Live_consultation.get_live_consultation_by_title = (title,result)=>{
    dbConn.query('select * from live_consultation where consultation_title = ?',title,(err,res)=>{
        if(err){
            console.log('Error occured while getting by name',err);
            result(null,err);
        }else{
            console.log('live consultation fetched by name');
            result(null,res);
        }
    })
}

module.exports = Live_consultation;