var dbConn = require('../../config/db.config');
var Radiology = function(radiology){
    this.id = radiology.id;
}

Radiology.getRadiology = (result)=>{
    dbConn.query('select * from radio',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Radiology  fetched ');
            result(null,res);
        }
    })
}
module.exports = Radiology;