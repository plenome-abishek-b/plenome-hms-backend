var dbConn = require('../../config/db.config');

var MedicineSupplier = function(medicineSupplier){
    this.id = medicineSupplier.id;

}
MedicineSupplier.getMedicineSupplier = (result)=>{
    dbConn.query('select * from medicine_supplier ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('purchase details  fetched ');
            result(null,res);
        }
    })
}

module.exports = MedicineSupplier;