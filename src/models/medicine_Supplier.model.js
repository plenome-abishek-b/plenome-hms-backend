var dbConn = require('../../config/db.config');

var MedicineSupplier = function(medicineSupplier){
    this.id = medicineSupplier.id;
    this.supplier = medicineSupplier.supplier;
    this.contact = medicineSupplier.contact;
    this.supplier_person = medicineSupplier.supplier_person;
    this.supplier_person_contact = medicineSupplier.supplier_person_contact;
    this.supplier_drug_licence = medicineSupplier.supplier_drug_licence;
    this.address = medicineSupplier.address;
    this.created_at = medicineSupplier.created_at;
}

MedicineSupplier.createMedicineSupplier= (MedicineSupplier,result)=>{
    dbConn.query('insert into medicine_supplier set ?',MedicineSupplier,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('dosage Data inserted Successfully');
            result(null,res)
        }
    })
}

MedicineSupplier.getMedicineSupplier= (result)=>{
    dbConn.query('select * from medicine_supplier',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('medicine_supplier  fetched ');
            result(null,res);
        }
    })
}
module.exports = MedicineSupplier;