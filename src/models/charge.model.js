var dbConn = require('../../config/db.config');
var Charge = function(charge){
    this.id = charge.id;
    this.ipd_id = charge.ipd_id;
    this.opd_id = charge.opd_id;
    this.charge_id = charge.charge_id;
    this.standard_charge = charge.standard_charge;
    this.tpa_charge = charge.tpa_charge;
    this.qty = charge.qty;
    this.apply_charge = charge.apply_charge;
    this.tax = charge.tax;
    this.amount = charge.amount;
    this.note = charge.note;
    this.date = charge.date;
    this.created_at = charge.created_at;
    
}
Charge.createCharge = (chargeData,result)=>{
    dbConn.query('insert into patient_charges SET ?',chargeData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('charge Data inserted Successfully');
            result(null,res)
        }
    });
}


let query = '';
let value = [];

Charge.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

Charge.getCharge = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charges fetched ');
            result(null,res);
        }
    })
}
module.exports = Charge;