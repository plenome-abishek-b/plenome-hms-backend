const BedFloorModel = require('../models/bedFloor.model')



exports.createBedFloor = (req,res)=>{
    const floorData = new BedFloorModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BedFloorModel.createBedFloor (floorData,(err,floor)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'  floor added successfully',data:floor.insertId});

        })
    }
}


exports.getBedFloor= (req,res)=>{

let updatedQuery = 'select * from floor '
let updatedValue = []
if(req.query.search){
    updatedQuery += ' where floor.name like ? or floor.description like ?'
    updatedValue.push('%'+req.query.search+'%')
    updatedValue.push('%'+req.query.search+'%')

}

    BedFloorModel.setQuery(updatedQuery,updatedValue)
    BedFloorModel.getBedFloor ((err,floor)=>{
        if(err)
        res.send(err);
     
        console.log('floor ',floor);
        res.send(floor);
    })
}