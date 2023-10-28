var dbCon = require('../../config/db.config');

var FrontOfficeCallLog = function(frontofficecalllog) {
this.name = frontofficecalllog.name;
this.contact = frontofficecalllog.contact;
this.date = frontofficecalllog.date;
this.description = frontofficecalllog.description;
this.follow_up_date = frontofficecalllog.follow_up_date;
this.call_duration = frontofficecalllog.call_duration;
this.note = frontofficecalllog.note;
this.call_type = frontofficecalllog.call_type;
this.created_at = frontofficecalllog.created_at;
}




//Add new call log details

FrontOfficeCallLog.createCallLog = (patientReqData,result) =>{
    dbCon.query('INSERT INTO general_calls SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Visitors details created successfully')
        result(null,res);
    }
    })
    }


    //get call log detail list

    FrontOfficeCallLog.getCallLogList = (result) => {
dbCon.query('SELECT * FROM general_calls',(err,res)=>{
if(err){
    console.log('Error while fetching Visitors details',err);
    result(null,err);
}
else{
    console.log('Visitors details fetched successfully');
    result(null,res);
}
});
}



module.exports = FrontOfficeCallLog;