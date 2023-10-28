const BedGroupModel = require('../models/bedGroup.model')


exports.createBedGroup = (req,res)=>{
    const groupData = new BedGroupModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BedGroupModel.createBedGroup (groupData,(err,group)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'  bed group added successfully',data:group.insertId});

        })
    }
}


exports.getBedGroup= (req,res)=>{

    let updatedQuery = 'select bed_group.id,bed_group.name as bed_group_name,floor.name as floor_name,bed_group.description  from bed_group join floor on floor.id = bed_group.floor where bed_group.id  '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' and bed_group.name like ? or floor.name like ? or bed_group.description like ? '
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
    }
    
    BedGroupModel.setQuery(updatedQuery,updatedValue)
    BedGroupModel.getBedGroup ((err,group)=>{
            if(err)
            res.send(err);
         
            console.log('group ',group);
            res.send(group);
        })
    }