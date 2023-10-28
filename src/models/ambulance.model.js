var dbconn = require('../../config/db.config');
var Ambulance = function (ambulance){
    
    this.id = ambulance.id;
    this.case_reference_id = ambulance.case_reference_id;
    this.patient_id = ambulance.patient_id;
    this.patient_name = ambulance.patient_name;
    this.mobileno = ambulance.mobileno;
    this.vehicle_no = ambulance.vehicle_no;
    this.vehicle_model = ambulance.vehicle_model;
    this.driver_name = ambulance.driver_name;
    this.address = ambulance.address;
    this.date = ambulance.date;
    this.net_amount = ambulance.net_amount;
    this.amount = ambulance.amount;

}



//GET THE AMBULANCE


Ambulance.getAmbulance = (result)=>{
    dbconn.query('SELECT ac.id AS `Bill No`, ac.case_reference_id AS `Case ID`, CONCAT(p.patient_name, " (", ac.patient_id, ")") AS `Patient name`, v.vehicle_no AS `Vehicle Number`, v.vehicle_model AS `Vehicle Model`, v.driver_name AS `Driver name`, p.mobileno AS `Driver contact number`, p.address AS `Patient address`, ac.date, ac.net_amount, t.amount FROM ambulance_call ac LEFT JOIN patients p ON ac.patient_id = p.id LEFT JOIN vehicles v ON ac.vehicle_id = v.id LEFT JOIN transactions t ON ac.transaction_id = t.id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patients  fetched ');
            result(null,res);
        }
    })
}


//GET THE AMBULANCE BY CASE ID


Ambulance.getAmbulanceByID = (case_id,result)=>{
    dbconn.query('SELECT ac.id AS `Bill No`, ac.case_reference_id AS `Case ID`, CONCAT(p.patient_name, " (", ac.patient_id, ")") AS `Patient name`, v.vehicle_no AS `Vehicle Number`, v.vehicle_model AS `Vehicle Model`, v.driver_name AS `Driver name`, p.mobileno AS `Driver contact number`, p.address AS `Patient address`, ac.date, ac.net_amount, t.amount FROM ambulance_call ac LEFT JOIN patients p ON ac.patient_id = p.id LEFT JOIN vehicles v ON ac.vehicle_id = v.id LEFT JOIN transactions t ON ac.transaction_id = t.id where ac.case_reference_id = ?', case_id,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Ambulance fetched by case ID ');
            result(null,res);
        }
    })
}




module.exports = Ambulance;

