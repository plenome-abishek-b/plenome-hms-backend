var dbConn = require('../../config/db.config');

var DonorDetails = function(donorDetails){
    this.id = donorDetails.id;
    this.donor_name = donorDetails.donor_name;
    this.date_of_birth = donorDetails.date_of_birth;
    this.blood_bank_product_id = donorDetails.blood_bank_product_id;
    this.gender = donorDetails.gender;
    this.father_name = donorDetails.father_name;
    this.address = donorDetails.address;
    this.contact_no = donorDetails.contact_no;
    this.created_at = donorDetails.created_at;
}

DonorDetails.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}
DonorDetails.getDonorDetails = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Donor Details  fetched ');
            result(null,res);
        }
    })
}



DonorDetails.createDonorDetails = (DonorDetailsData,result)=>{
    console.log(DonorDetailsData);
    dbConn.query('insert into blood_donor set ?',DonorDetailsData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('Donor Details  inserted Successfully');
            result(null,res)
        }
    })
}


module.exports = DonorDetails