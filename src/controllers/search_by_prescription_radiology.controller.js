const prescription_radiology_model = require('../models/search_by_prescription_radiology.model');
exports.getprescription_radiology = (req,res)=>{

    let updatedQuery = 'select radio.*,charges.name as c_name,tax_category.name as t_name,tax_category.percentage,ipd_prescription_basic.id as basic_id, ipd_details.patient_id,patients.patient_name,ipd_prescription_test.radiology_id from radio join charges on charges.id = radio.charge_id join tax_category on tax_category.id = charges.tax_category_id join ipd_prescription_test on ipd_prescription_test.radiology_id = radio.id join ipd_prescription_basic on ipd_prescription_basic.id = ipd_prescription_test.ipd_prescription_basic_id join ipd_details on ipd_details.id = ipd_prescription_basic.ipd_id join patients on patients.id = ipd_details.patient_id';
    let updatedValue = [];

    if(req.query.basicId){
        updatedQuery = 'select radio.*,charges.name as c_name,tax_category.name as t_name,tax_category.percentage,ipd_prescription_basic.id as basic_id, ipd_details.patient_id,patients.patient_name,ipd_prescription_test.radiology_id from radio join charges on charges.id = radio.charge_id join tax_category on tax_category.id = charges.tax_category_id join ipd_prescription_test on ipd_prescription_test.radiology_id = radio.id join ipd_prescription_basic on ipd_prescription_basic.id = ipd_prescription_test.ipd_prescription_basic_id join ipd_details on ipd_details.id = ipd_prescription_basic.ipd_id join patients on patients.id = ipd_details.patient_id  where ipd_prescription_test.ipd_prescription_basic_id = ?';
        updatedValue.push(req.query.basicId);
    }
    prescription_radiology_model.setQuery(updatedQuery,updatedValue);
    prescription_radiology_model.getprescription_radiology((err,radiology_prescription)=>{
       // console.log(updatedQuery);
        if(err)
        res.send(err);
        res.send(radiology_prescription);
    })
    
}