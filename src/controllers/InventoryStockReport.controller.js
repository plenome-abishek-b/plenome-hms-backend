const InventoryStockReportModel = require('../models/inventoryStockReport.model');

exports.getInventoryStockReport = (req,res)=>{
    let updatedQuery = 'select distinct item.id,item.name,item_category.item_category,item_stock.quantity as totalQuantity,item_supplier.item_supplier,item_store.item_store,(SELECT SUM(quantity) FROM item_issue WHERE item_issue.item_id = item_stock.item_id) as supplied,COALESCE((item_stock.quantity - (SELECT SUM(quantity) FROM item_issue WHERE item_issue.item_id = item_stock.item_id)), item_stock.quantity) AS remainingQuantity from item_stock join item on item_stock.item_id = item.id join item_category on item_category.id = item.item_category_id join item_supplier on item_supplier.id = item_stock.supplier_id join item_store on item_store.id = item_stock.store_id left join item_issue on item_issue.item_id = item.id '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' where item.name like ? or item_category.item_category like ? or item_supplier.item_supplier like ? or item_store.item_store like ?';
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')


    }

     
    InventoryStockReportModel.setQuery(updatedQuery,updatedValue);
    InventoryStockReportModel.GetInventoryStockReport((err,inventoryStockReport)=>{
        if(err)
        res.send(err);

        console.log('inventory Stock Report ',inventoryStockReport);
        res.send(inventoryStockReport);
    })
}