var dbConn = require('../../config/db.config');

var PharmacyBillReport = function(pharmacyBillReport){
    this.id = pharmacyBillReport.id;
}
let query = '';
let value = []
PharmacyBillReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


PharmacyBillReport.GetPharmacyBillReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Pharmacy Bill  Report fetched ');
            result(null,res);
        }
    })
}
module.exports = PharmacyBillReport