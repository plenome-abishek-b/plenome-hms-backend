var dbConn = require('../../config/db.config');

var Findings = function(findings){
    this.id = findings.id
}

Findings.getFindings= (result)=>{
    dbConn.query('select * from finding',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('findingfetched ');
            result(null,res);
        }
    })
}
module.exports = Findings