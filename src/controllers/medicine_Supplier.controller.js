const MedicineSupplierModel = require('../models/medicine_Supplier.model');

exports.createMedicineSupplier= (req,res)=>{
    const MedicineSupplierData = new MedicineSupplierModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        MedicineSupplierModel.createMedicineSupplier (MedicineSupplierData,(err,MedSupplier)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' MedicineSupplierData  added successfully',data:MedSupplier.insertId});

        })
    }
}


exports.getMedicineSupplier= (req,res)=>{
    MedicineSupplierModel.getMedicineSupplier ((err,Supplier)=>{
        if(err)
        res.send(err);
     
        console.log('Supplier ',Supplier);
        res.send(Supplier);
    })
}