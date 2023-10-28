const bed_history_model = require('../models/bed_history.model');


exports.get_bed_history = (req,res)=>{

    let updatedQuery = 'select ipd_details.id,ipd_details.bed,ipd_details.bed_group_id,ipd_details.date,discharge_card.discharge_date,bed_group.name as bed_group_name,bed.name as bed_name from ipd_details join bed_group on bed_group.id = ipd_details.bed_group_id join bed on bed .id = ipd_details.bed join discharge_card on discharge_card.ipd_details_id = ipd_details.id'
    let updatedValue = []
    if(req.query.ipd_id){
        updatedQuery ='select ipd_details.id,ipd_details.bed,ipd_details.bed_group_id,ipd_details.date,discharge_card.discharge_date,bed_group.name as bed_group_name,bed.name as bed_name from ipd_details join bed_group on bed_group.id = ipd_details.bed_group_id join bed on bed .id = ipd_details.bed join discharge_card on discharge_card.ipd_details_id = ipd_details.id where ipd_details.id = ?'
        updatedValue.push(req.query.ipd_id)
    }
    bed_history_model.setQuery(updatedQuery,updatedValue)

    bed_history_model.get_bed_history((err,bed_history)=>{
        if(err)
    res.send(err);
 
    console.log('bed_history ',bed_history);
    res.send(bed_history);
    })

}