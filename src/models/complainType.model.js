var dbConn = require('../../config/db.config');
var ComplainType = function(complainType){
    this.id = complainType.id;
    this.complaint_type = complainType.complaint_type;
    this.description = complainType.description;
    this.created_at = complainType.created_at;
}

ComplainType.createComplaintType = (complainTypeData,result)=>{
    dbConn.query('insert into complaint_type SET ?',complainTypeData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('complain Type Data inserted Successfully');
            result(null,res)
        }
    });
}

ComplainType.getComplaintType = (result)=>{
    dbConn.query('SELECT * FROM complaint_type',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('complaint_type fetched ');
            result(null,res);
        }
    })
}
module.exports = ComplainType;