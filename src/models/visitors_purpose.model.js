var dbConn = require('../../config/db.config');
 var VisitorsPurpose = function(visitorsPurpose){
    this.id = visitorsPurpose.id;
    this.visitors_purpose = visitorsPurpose.visitors_purpose;
    this.description = visitorsPurpose.description;
    this.created_at = visitorsPurpose.created_at;
 }

 VisitorsPurpose.createVisitorPurpose = (purposeData,result)=>{
    dbConn.query('insert into visitors_purpose SET ?',purposeData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('purpose Data inserted Successfully');
            result(null,res)
        }
    }); 
}

VisitorsPurpose.getVisitorsPurpose = (result)=>{
    dbConn.query('SELECT * FROM visitors_purpose',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('visitors_purpose fetched ');
            result(null,res);
        }
    })
}

module.exports = VisitorsPurpose;