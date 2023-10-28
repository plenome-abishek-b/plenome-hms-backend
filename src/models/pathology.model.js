var dbConn = require('../../config/db.config');
var Pathology = function(pathology){
    this.id = pathology.id;
}

Pathology.getPathology = (result)=>{
    dbConn.query('select * from pathology',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('pathology fetched ');
            result(null,res);
        }
    })
}
module.exports = Pathology;