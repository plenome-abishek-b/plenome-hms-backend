var dbConn = require('../../config/db.config');

var RadiologyCategory = function(radiologyCategory){
    this.id = radiologyCategory.id
}

RadiologyCategory.getRadipCategory= (result)=>{
    dbConn.query('select * from lab',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('radiology Category fetched ');
            result(null,res);
        }
    })
}
module.exports = RadiologyCategory