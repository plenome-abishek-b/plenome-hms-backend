const medicineNameModel = require('../models/medicineName.model');
exports.getName = (req,res)=>{
    let updatedQuery = 'select * from pharmacy ';
    let updatedValue = []

    if(req.query.category){
        updatedQuery = 'select * from pharmacy where medicine_category_id = ?';
        updatedValue.push(req.query.category);
    }

    medicineNameModel.setQuery(updatedQuery,updatedValue);
    medicineNameModel.getName((err,medNmae)=>{
        if(err)
        res.send(err);

        console.log('medicine names ',medNmae);
        res.send(medNmae);
    })

}