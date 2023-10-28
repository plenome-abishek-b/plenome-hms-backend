const BedTypeModel = require('../models/bedType.model')


exports.createBedType = (req,res)=>{
    const typeData = new BedTypeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BedTypeModel.createBedType (typeData,(err,type)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'   Bed Type added successfully',data:type.insertId});

        })
    }
}



exports.getBedType= (req,res)=>{

    let updatedQuery = 'select * from bed_type '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' where bed_type.name like ? '
        updatedValue.push('%'+req.query.search+'%')
    
    }
    
    BedTypeModel.setQuery(updatedQuery,updatedValue)
    BedTypeModel.getBedType ((err,type)=>{
            if(err)
            res.send(err);
         
            console.log('type ',type);
            res.send(type);
        })
    }