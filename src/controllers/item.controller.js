const inventoryitemmodel = require('../models/item.model');
exports.getitem = (req,res)=>{

    let updatedQuery = 'select distinct item.id,item.name,item.description,item.unit,item.item_category_id,item_category.item_category,item_stock.quantity as totalQuantity,(SELECT SUM(quantity) FROM item_issue WHERE item_issue.item_id = item_stock.item_id) as supplied,COALESCE((item_stock.quantity - (SELECT SUM(quantity) FROM item_issue WHERE item_issue.item_id = item_stock.item_id)), item_stock.quantity) AS remainingQuantity from item left join item_category on item_category.id = item.item_category_id left join item_stock on item_stock.item_id = item.id left join item_issue on item_issue.item_id = item.id'
    let updatedvalue = [];

   

    inventoryitemmodel.setQuery(updatedQuery,updatedvalue);
    inventoryitemmodel.getitem((err,items)=>{
        console.log(updatedQuery);
        if(err)
        res.send(err);

        console.log('items',items);
        res.send(items);
    })
}

exports.createitem = (req,res)=>{
    const itemdata = new inventoryitemmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
}else{
    inventoryitemmodel.createitem(itemdata,(err,item)=>{
        if(err)
        res.send(err);
        res.json({status:true,message:'list item added successfully',data:item.insertId});
    })

}
}