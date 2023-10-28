var dbConn = require('../../config/db.config');


var PathologyCategory = function(pathologyCategory){
    this.id = pathologyCategory.id
}

PathologyCategory.getPathoCategory= (result)=>{
    dbConn.query('select * from pathology_category',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('pathology Category fetched ');
            result(null,res);
        }
    })
}
module.exports = PathologyCategory