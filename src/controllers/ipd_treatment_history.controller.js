const treatment_history_model = require('../models/ipd_treatment_history.model');


exports.get_treatment_history = (req,res)=>{

    let updatedQuery = 'select discharge_card.ipd_details_id,ipd_details.symptoms,ipd_details.cons_doctor,bed_group.name as bed_group_name, bed.name as bed_name, floor.name as floor_name,staff.name as STAFF_NAME,staff.surname from discharge_card join ipd_details on ipd_details.id = discharge_card.ipd_details_id  join staff on staff.id = ipd_details.cons_doctor join bed_group on bed_group.id = ipd_details.bed_group_id join bed on ipd_details.bed = bed.id join floor on floor.id = bed_group.floor'
    let updatedValue = []

    if(req.query.ipd_id){
updatedQuery = 'select discharge_card.ipd_details_id,ipd_details.symptoms,ipd_details.cons_doctor,bed_group.name as bed_group_name, bed.name as bed_name, floor.name as floor_name from discharge_card join ipd_details on ipd_details.id = discharge_card.ipd_details_id join bed_group on bed_group.id = ipd_details.bed_group_id join bed on ipd_details.bed = bed.id join floor on floor.id = bed_group.floor where ipd_details_id = ?'
updatedValue.push(req.query.ipd_id)
    }
    treatment_history_model.setQuery(updatedQuery,updatedValue)

    treatment_history_model.get_treatment_history((err,treatment_history)=>{
        if(err)
        res.send(err);
     
        console.log('treatment_history ',treatment_history);
        res.send(treatment_history);
    })
}