const MedicineModel = require('../models/pharmacyMedicine.model');

exports.getMedicine = (req,res)=>{
    MedicineModel.getMedicine ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('medicine ',med);
        res.send(med);
    })
}

exports.createPurchase =(req,res)=>{
    const medicineData = new MedicineModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        MedicineModel.createMedicine(medicineData,(err,medicine)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' purchase added successfully',data:medicine.insertId});

        })
    }
}