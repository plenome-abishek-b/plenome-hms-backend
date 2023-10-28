var dbConn = require('../../config/db.config');
var OperationCategory = function(operationCategory){
    this.id = operationCategory.id;
}


OperationCategory.getCategory = (result)=>{

    dbConn.query('select * from operation_category',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_test  fetched ');
            result(null,res);
        }
    })
}


module.exports = OperationCategory;