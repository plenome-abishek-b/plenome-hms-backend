var dbConn = require('../../config/db.config');
var CaseReference = function(caseReference){
    this.id = caseReference.id;
    this.created_at = caseReference.created_at;
    }
    CaseReference.createCaseReference= (caseReferenceData,result)=>{
        dbConn.query('insert into case_references SET ?',caseReferenceData,(err,res)=>{
            if (err){
                console.log(err)
                console.log('Error while inserting data ');
                result(null,err);
            }else{
                console.log('CaseReference Data inserted Successfully');
                result(null,res)
            }
        
        });
    }
    module.exports = CaseReference;