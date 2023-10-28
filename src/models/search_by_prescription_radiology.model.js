var dbconn = require('../../config/db.config');
var prescription_radiology = function(prescripe){
    this.id = prescripe.id;
}

let query = 'select radio.*,charges.name as c_name,tax_category.name as t_name,tax_category.percentage,ipd_prescription_basic.id as basic_id, ipd_details.patient_id,patients.patient_name,ipd_prescription_test.radiology_id from radio join charges on charges.id = radio.charge_id join tax_category on tax_category.id = charges.tax_category_id  join ipd_prescription_test on ipd_prescription_test.radiology_id = radio.id join ipd_prescription_basic on ipd_prescription_basic.id = ipd_prescription_test.ipd_prescription_basic_id join ipd_details on ipd_details.id = ipd_prescription_basic.ipd_id join patients on patients.id = ipd_details.patient_id';
let value = [];

prescription_radiology.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
prescription_radiology.getprescription_radiology = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        //console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('radiology_prescription fetched');
            result(null,res);
        }
    })
}

module.exports = prescription_radiology;