var dbConn = require('../../config/db.config');

var InventoryIssueReport = function(inventoryIssueReport){
    this.id = inventoryIssueReport.id
}
let query = '';
let value = []
InventoryIssueReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
InventoryIssueReport.GetInventoryIssueReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Inventory Issue Report fetched ');
            result(null,res);
        }
    })
}
module.exports = InventoryIssueReport