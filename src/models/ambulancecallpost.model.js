var dbconn = require('../../config/db.config');
var Ambulance = function (ambulance){
    
    this.id = ambulance.id;
    this.vehicle_id = ambulance.vehicle_id;
    this.patient_id = ambulance.patient_id;
    this.call_from = ambulance.call_from;
    this.call_to = ambulance.call_to;
    this.case_reference_id = ambulance.case_reference_id;
    this.vehicle_model = ambulance.vehicle_model;
    this.driver = ambulance.driver; 
    this.date = ambulance.date;
    this.charge_category_id = ambulance.charge_category_id;
    this.charge_id = ambulance.charge_id;
    this.standard_charge = ambulance.standard_charge;
    this.note = ambulance.note;
    this.tax_percentage = ambulance.tax_percentage;
    this.amount = ambulance.amount;
    this.net_amount = ambulance.net_amount;
    this.transaction_id = ambulance.transaction_id;

}

// post the values in ambulance table

Ambulance.createambulancelist = (ambulanceData,result)=>{
  dbconn.query('insert into ambulance_call SET ?',ambulanceData,(err,res)=>{
      if (err){
          console.log(err)
          console.log('Error while inserting data ');
          result(null,err);
      }else{
          console.log('ambulance Data inserted Successfully');
          result(null,res)
      }
  
  });
}

module.exports = Ambulance;
