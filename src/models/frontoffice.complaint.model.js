var dbCon = require('../../config/db.config');

var FrontOfficeComplaint = function(frontofficecomplaint) {
this.complaint_type_id = frontofficecomplaint.complaint_type_id;
this.source = frontofficecomplaint.source;
this.name = frontofficecomplaint.name;
this.contact = frontofficecomplaint.contact;
this.email = frontofficecomplaint.email;
this.date = frontofficecomplaint.date;
this.description = frontofficecomplaint.description;
this.action_taken = frontofficecomplaint.action_taken;
this.assigned = frontofficecomplaint.assigned;
this.note = frontofficecomplaint.note;
this.image = frontofficecomplaint.image;
this.created_at = frontofficecomplaint.created_at;
}




//Add new complaint details

FrontOfficeComplaint.createComplaint = (patientReqData,result) =>{
    dbCon.query('INSERT INTO complaint SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('complaint details created successfully')
        result(null,res);
    }
    })
    }


   //get complaint detail list

    FrontOfficeComplaint.getComplaintList = (result) => {
dbCon.query('SELECT * FROM complaint',(err,res)=>{
if(err){
    console.log('Error while fetching complaint details',err);
    result(null,err);
}
else{
    console.log('complaint details fetched successfully');
    result(null,res);
}
});
}



module.exports = FrontOfficeComplaint;