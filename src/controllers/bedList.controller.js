const BedListModel = require('../models/bedList.model')

exports.createBedList = (req,res)=>{
    const listData = new BedListModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BedListModel.createBedList (listData,(err,list)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'  bed added successfully',data:list.insertId});

        })
    }
}


exports.getBedList= (req,res)=>{

    let updatedQuery = 'select bed.id,bed.name,bed_type.name as bed_type_name,concat(bed_group.name," - ",floor.name) as bed_group_name,CASE WHEN bed.is_active = "no" THEN 1 ELSE 0 END AS is_active_flag from bed join bed_group on bed_group.id = bed.bed_group_id join bed_type on bed_type.id = bed.bed_type_id join floor on floor.id = bed_group.floor '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' where bed.name like ? or bed_type.name like ? or bed_group.name like ? '
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
    
    }
    
    BedListModel.setQuery(updatedQuery,updatedValue)
    BedListModel.getBedList ((err,list)=>{
            if(err)
            res.send(err);
         
            console.log('list ',list);
            res.send(list);
        })
    }


exports.updateBedList = (req,res)=>{

    let updatedQuery = '';
    let updatedValues = []

    if(req.query.id){
        updatedQuery = 'update bed SET ? where id = ?'
        updatedValues.push(req.query.id)
    }
    BedListModel.setQuery(updatedQuery,updatedValues)
    const BedListUpdateData = new BedListModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BedListModel.updateBedList(BedListUpdateData,(err,BedList)=>{
            if(err){
            res.send(err);
        }else{
            if(BedListUpdateData.id == updatedValues[0]){

                res.json({status:true,message:' Bed List updated successfully',data:BedListUpdateData.id});
            }
            else{
                res.json({status:false,message:'the id of the post value and the id given must be same'})
            }

        }
        })
    }
}