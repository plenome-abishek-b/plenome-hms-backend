var dbconn = require('../../config/db.config');
var inventory_item_stock = function(stock){
    this.id = stock.id;
    this.item_id = stock.item_id;
    this.supplier_id = stock.supplier_id;
    this.symbol = stock.symbol;
    this.store_id = stock.store_id;
    this.quantity = stock.quantity;
    this.purchase_price = stock.purchase_price;
    this.date = stock.date;
    this.attachment = stock.attachement;
    this.description = stock.description;
    this.is_active = stock.is_active;
    this.created_at = stock.created_at;
}

let query = '';
let value = [];

inventory_item_stock.setQuery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    value = updatedvalues;
}

inventory_item_stock.getitem_stock = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('list item stock fetched');
            result(null,res);
        }
    })
}

inventory_item_stock.create_item_stock = (stockdata,result)=>{
    dbconn.query('insert into item_stock SET ?',stockdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('item_stock data inserted successfully');
            result(null,res)
        }
    })
}

module.exports = inventory_item_stock;