var dbConn = require('../../config/db.config');
var FindingCategory = function(findingCategory){
    this.id = findingCategory.id;
}
FindingCategory.getFindingCategory = (result)=>{
    dbConn.query('select * from finding_category',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Finding Category  fetched ');
            result(null,res);
        }
    })
}
module.exports = FindingCategory;