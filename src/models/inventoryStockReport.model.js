var dbConn = require('../../config/db.config');

var InventoryStockReport = function(inventoryStockReport){
    this.id = inventoryStockReport.id
}
let query = '';
let value = []
InventoryStockReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

InventoryStockReport.GetInventoryStockReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Inventory Stock Report fetched ');
            result(null,res);
        }
    })
}
module.exports = InventoryStockReport