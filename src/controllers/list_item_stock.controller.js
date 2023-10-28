const inventory_item_stockmodel = require('../models/list_item_stock.model');
exports.getitem_stock = (req,res)=>{

    let updatedQuery = 'select item.name,item_category.item_category,item_supplier.item_supplier,item_store.item_store, item_stock.date,item_stock.description,item_stock.quantity,item_stock.purchase_price from item_stock join item on item.id = item_stock.item_id join item_category on item_category.id = item.item_category_id join item_supplier on item_supplier.id = item_stock.supplier_id join item_store on item_store.id = item_stock.store_id;'
    let updatedvalue = [];

 

    inventory_item_stockmodel.setQuery(updatedQuery,updatedvalue);
    inventory_item_stockmodel.getitem_stock((err,stock)=>{
        console.log(updatedQuery);
        if(err)
        res.send(err);

        console.log('stock',stock);
        res.send(stock);
    })
}

exports.create_item_stock = (req,res)=>{
    const stockdata = new inventory_item_stockmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fillt he details'});
    }else{
        inventory_item_stockmodel.create_item_stock(stockdata,(err,stock)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'list item stock successfully',data:stock.insertId});
        })

    }
    }