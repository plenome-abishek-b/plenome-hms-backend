var dbConn = require('../../config/db.config');

var Medicine = function(medicine){
    this.id = medicine.id;
    this.medicine_name = medicine.medicine_name;
    this.medicine_category_id = medicine.medicine_category_id;
    this.medicine_image = medicine.medicine_image;
    this.medicine_company = medicine.medicine_company;
    this.medicine_composition = medicine.medicine_composition;
    this.medicine_group = medicine.medicine_group;
    this.unit = medicine.unit;
    this.min_level = medicine.min_level;
    this.reorder_level = medicine.reorder_level;
    this.vat = medicine.vat;
    this.unit_packing = medicine.unit_packing;
    this.vat_ac = medicine.vat_ac;
    this.note = medicine.note;
    this.is_active = medicine.is_active;
    this.created_at = medicine.created_at;
}
Medicine.getMedicine = (result)=>{
    dbConn.query('select pharmacy.*,medicine_category.medicine_category from pharmacy join medicine_category on pharmacy.medicine_category_id = medicine_category.id ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('purchase details  fetched ');
            result(null,res);
        }
    })
}
Medicine.createMedicine = (medicineData,result)=>{
    dbConn.query('insert into pharmacy SET ?',medicineData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('medicine Data inserted Successfully');
            result(null,res)
        }
    
    });
}
module.exports = Medicine;