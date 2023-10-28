var dbConn = require('../../config/db.config');

var BloodDonorReport = function(bloodDonorReport){
    this.id = bloodDonorReport.id;
}
let query = '';
let value = []
BloodDonorReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


BloodDonorReport.GetBloodDonorReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Blood Donor Report  fetched ');
            result(null,res);
            
        }
    })
}

module.exports = BloodDonorReport