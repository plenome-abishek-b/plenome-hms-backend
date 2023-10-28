var dbConn = require('../../config/db.config');

var InventoryItemReport = function(inventoryItemReport){
    this.id = inventoryItemReport.id
}
let query = '';
let value = []
InventoryItemReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
InventoryItemReport.GetInventoryItemReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Inventory Item Report fetched ');
            result(null,res);
        }
    })
}
module.exports = InventoryItemReport