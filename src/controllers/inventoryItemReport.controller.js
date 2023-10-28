const InventoryItemModel = require('../models/inventoryItemReport.model')
exports.GetInventoryItemReport = (req,res)=>{
    let updatedQuery = 'select item.name,item_category.item_category,item_supplier.item_supplier,item_store.item_store,item_stock.date,item_stock.quantity,item_stock.purchase_price from item_stock join item on item.id = item_stock.item_id join item_category on item_category.id = item.item_category_id join item_supplier on item_supplier.id = item_stock.supplier_id join item_store on item_store.id = item_stock.store_id where item.id  ';
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += ' and date(item_stock.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(item_stock.date ) = year(now()) and week(item_stock.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(item_stock.date ) =year(now()) and week(item_stock.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(curdate()) and month(item_stock.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(date_sub(now(),interval 1 month)) and month(item_stock.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(date_sub(now(),interval 3 month)) and month(item_stock.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(date_sub(now(),interval 6 month)) and month(item_stock.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(date_sub(now(),interval 9 month)) and month(item_stock.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(date_sub(now(),interval 12 month)) and month(item_stock.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(item_stock.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(item_stock.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( item_stock.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
        InventoryItemModel.setQuery(updatedQuery,updatedValues);
        InventoryItemModel.GetInventoryItemReport((err,inventeryItemReport)=>{
            if(err)
            res.send(err);

            console.log('inventory Item Report ',inventeryItemReport);
            res.send(inventeryItemReport);
        })
        
}