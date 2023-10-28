const consultation_durationmodel = require('../models/slot_consultation.model');

exports.getconsultation = (req,res)=>{

    let updatedQuery = 'select shift_details.consult_duration,charge_categories.name as category_name,charges.name as charge_name,charges.standard_charge from shift_details join charges on charges.id = shift_details.charge_id join charge_categories on charge_categories.id = charges.charge_category_id';
    let updatedvalues = [];

    if(req.query.id){
        updatedQuery += ' where shift_details.staff_id = ?'
        updatedvalues.push(req.query.id);
    }

    consultation_durationmodel.setQuery(updatedQuery,updatedvalues)
    consultation_durationmodel.getconsultation((err,consultation)=>{
        if(err)
        res.send(err);

        console.log('consultation duration',consultation);
        res.send(consultation);
    })
}