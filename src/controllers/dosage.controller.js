const DosageDetailsModel = require('../models/dosage.model');
exports.getDosage = (req,res)=>{
    let updatedQuery = 'select * from medicine_dosage ';
    let updatedValue = []

    if(req.query.category){
        updatedQuery = 'select medicine_dosage.*,charge_units.unit from medicine_dosage join charge_units on charge_units.id = medicine_dosage.charge_units_id where medicine_category_id = ?';
        updatedValue.push(req.query.category);
    }

    DosageDetailsModel.setQuery(updatedQuery,updatedValue);
    DosageDetailsModel.getDosage((err,doseNmae)=>{
        if(err)
        res.send(err);

        console.log('doseNmae names ',doseNmae);
        res.send(doseNmae);
    })

}   