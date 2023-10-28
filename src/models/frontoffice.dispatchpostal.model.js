var dbCon = require('../../config/db.config');

var FrontOfficeDispatchPostal = function(frontofficedispatchpostal) {
this.reference_no = frontofficedispatchpostal.reference_no;
this.to_title = frontofficedispatchpostal.to_title;
this.address = frontofficedispatchpostal.address;
this.note = frontofficedispatchpostal.note;
this.from_title = frontofficedispatchpostal.from_title;
this.date = frontofficedispatchpostal.date;
this.image = frontofficedispatchpostal.image;
this.type = frontofficedispatchpostal.type;
this.created_at = frontofficedispatchpostal.created_at;
}




//Add new call log details

FrontOfficeDispatchPostal.createDispatchPostal = (patientReqData,result) =>{
    dbCon.query('INSERT INTO dispatch_receive SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Dispatch postal details created successfully')
        result(null,res);
    }
    })
    }


    //get call log detail list

    FrontOfficeDispatchPostal.getDispatchPostalList = (result) => {
        let type='dispatch';
dbCon.query('SELECT * FROM dispatch_receive WHERE type=?',type,(err,res)=>{
if(err){
    console.log('Error while fetching Dispatch postal',err);
    result(null,err);
}
else{
    console.log('Dispatch postal details fetched successfully');
    result(null,res);
}
});
}



module.exports = FrontOfficeDispatchPostal;