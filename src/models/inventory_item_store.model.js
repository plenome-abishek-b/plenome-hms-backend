var dbconn = require('../../config/db.config');
var item_store = function(store){
    this.id = store.id;
    this.item_store = store.item_store;
    this.code = store.code;
    this.description = store.description;
    this.created_at = store.created_at;
}

item_store.getitem_store = (result)=>{
    dbconn.query('select * from item_store',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('item store fetched');
            result(null,res);
        }
    })
}

item_store.createitem_store = (store,result)=>{
    dbconn.query('insert into item_store SET?',store,(err,res)=>{
//console.log(store);
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('item store inserted successfully');
            result(null,res);
        }
    })
}

module.exports = item_store;