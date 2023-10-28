const prescriptionmodel = require('../models/search_by_prescription.model');
exports.getprescription = (req,res)=>{

    let updatedQuery = 'select * from pathology '
    let updatedValue = [];

    if(req.query.basicId){
        updatedQuery = ' select pathology.test_name,pathology.report_days,charges.standard_charge,tax_category.percentage,patients.patient_name,patients.id as p_id from ipd_prescription_basic join ipd_prescription_test on ipd_prescription_basic.id = ipd_prescription_test.ipd_prescription_basic_id join pathology on pathology.id = ipd_prescription_test.pathology_id join charges on pathology.charge_id = charges.id join tax_category on tax_category.id = charges.tax_category_id join ipd_details on ipd_details.id = ipd_prescription_basic.ipd_id  join patients on patients.id = ipd_details.patient_id where ipd_prescription_basic.id =?'
        updatedValue.push(req.query.basicId);
    }
    prescriptionmodel.setQuery(updatedQuery,updatedValue);
    prescriptionmodel.getprescription((err,prescription)=>{
        console.log(updatedQuery);
        if(err)
        res.send(err);

       //    console.log('ssearch',prescription);
        res.send(prescription);
    })


}