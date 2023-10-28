var dbCon = require('../../config/db.config');

var Charges = function(charges) {
this.charge_category_id = charges.charge_category_id;
this.tax_category_id = charges.tax_category_id;
this.charge_unit_id = charges.charge_unit_id;
this.name = charges.name;
this.standard_charge = charges.standard_charge;
this.date = charges.date;
this.description = charges.description;
this.status = charges.status;
this.created_at = charges.created_at;
}




//Add new visits

Charges.createCharges = (patientReqData,result) =>{
    dbCon.query('INSERT INTO charges SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patient charges created successfully')
        result(null,res);
    }
    })
    }


    //get all patients visits list

    Charges.getAllPatientsCharges = (result) => {
dbCon.query('SELECT * FROM charges',(err,res)=>{
if(err){
    console.log('Error while fetching patients charges',err);
    result(null,err);
}
else{
    console.log('Patients charges fetched successfully');
    result(null,res);
}
});
}



module.exports = Charges;