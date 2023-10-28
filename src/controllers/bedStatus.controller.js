const BedStatusModel = require('../models/bedStatus.model')


exports.getBedStatus= (req,res)=>{

    let updatedQuery = 'select bed.id,bed.name,bed_type.name as bed_type_name,bed_group.name as bed_group_name,floor.name as floor_name,CASE WHEN bed.is_active = "no" THEN "Allotted" ELSE "Available" END AS is_active_flag from bed join bed_group on bed_group.id = bed.bed_group_id  join bed_type on bed_type.id = bed.bed_type_id join floor on floor.id = bed_group.floor '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += '  where bed.name like ? or bed_type.name like ? or bed_group.name like ? or floor.name like ?'
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
    
    }
    
    BedStatusModel.setQuery(updatedQuery,updatedValue)
    BedStatusModel.getBedStatus ((err,status)=>{
            if(err)
            res.send(err);
         
            console.log('status ',status);
            res.send(status);
        })
    }