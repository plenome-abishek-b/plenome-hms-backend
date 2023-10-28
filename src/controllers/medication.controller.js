const medicationModel = require('../models/medication.model');

exports.createMedication = (req,res)=>{
    
        const medicationData = new medicationModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            medicationModel.createMedication(medicationData,(err,medication)=>{
                if(err)
                res.send(err);
                res.json({status:true,message:' medication added successfully',data:medication.insertId});
    
            })
        }
    }

    exports.getMedication = (req,res)=>{
let updatedQuery = 'select medication_report.date,medicine_dosage.dosage,pharmacy.medicine_name,charge_units.unit from medication_report join pharmacy on pharmacy.id = medication_report.pharmacy_id join medicine_dosage on medicine_dosage.id = medication_report.medicine_dosage_id join charge_units on charge_units.id = medicine_dosage.charge_units_id '
let updatedValue = [];
if(req.query.ipd_id){
    updatedQuery += ' where ipd_id = ?';
    updatedValue.push(req.query.ipd_id)
}
medicationModel.setQuery(updatedQuery,updatedValue);
        medicationModel.getMedication((err,medication)=>{
            if(err)
        res.send(err);
     
        console.log('medication ',medication);
        res.send(medication);
        })
    }