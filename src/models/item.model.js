var dbconn = require('../../config/db.config');
var inventory_item = function(list){
    this.id = list.id;
    this.item_category_id = list.item_category_id;
    this.name = list.name;
    this.unit = list.unit;
    this.item_photo = list.item_photo;
    this.description = list.description;
    this.quantity = list.quantity;
    this.date = list.date;
    this.created_at = list.created_at;
}

let query = '';
let value = [];
inventory_item.setQuery = (updatedQuery,updatedvalue)=>{
    query = updatedQuery;
    value = updatedvalue;
}

inventory_item.getitem = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('list item fetched');
            result(null,res);
        }
    })
}

inventory_item.createitem = (itemdata,result)=>{
    dbconn.query('insert into item SET ?',itemdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('item data inserted successfully');
            result(null,res)
        }
    })
}

module.exports = inventory_item;