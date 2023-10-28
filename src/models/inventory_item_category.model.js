var dbconn = require('../../config/db.config');
var item_category = function(category){
    this.id = category.id;
    this.item_category = category.item_category;
    this.is_active = category.is_active;
    this.description = category.description;
    this.created_at = category.created_at;
}

item_category.getitem_category = (result)=>{
    dbconn.query('select * from item_category',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('item category fetched');
            result(null,res);
        }
    })
}

item_category.createitem_category = (category,result)=>{
    dbconn.query('insert into item_category SET?',category,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('item category inserted successfully');
            result(null,res);
        }
    })
}

module.exports = item_category;