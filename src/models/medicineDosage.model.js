var dbConn = require('../../config/db.config');

var MedDosage = function(medDosage){
    this.id = medDosage.id;
    this.medicine_category_id = medDosage.medicine_category_id;
    this.dosage = medDosage.dosage;
    this.charge_units_id = medDosage.charge_units_id;
    this.created_at = medDosage.created_at;
}

MedDosage.createMedDosage = (dosage_data,result)=>{
    dbConn.query('insert into medicine_dosage set ?',dosage_data,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('medicine_dosage Data inserted Successfully');
            result(null,res)
        }
    })
}

MedDosage.getMedDosage= (result)=>{
    dbConn.query('select medicine_dosage.*,charge_units.unit, medicine_category.medicine_category from medicine_dosage join charge_units on charge_units.id = medicine_dosage.charge_units_id join medicine_category on medicine_category.id = medicine_dosage.medicine_category_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('medicine_dosage  fetched ');
            result(null,res);
        }
    })
}
module.exports = MedDosage;