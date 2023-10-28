const MedicineSupplierModel = require("../models/medicineSupplier.model");


exports.getMedicineSupplier = (req,res)=>{
    MedicineSupplierModel.getMedicineSupplier ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('medicine supplier ',med);
        res.send(med);
    })
}