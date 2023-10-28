var dbConn = require('../../config/db.config');

var MedicineCategory = function(medicineCategory){
    this.id = medicineCategory.id;
}
MedicineCategory.getcategory = (result)=>{
    dbConn.query('select * from medicine_category ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('medicine_category details  fetched ');
            result(null,res);
        }
    })
}
module.exports = MedicineCategory;