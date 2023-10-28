var dbconn = require('../../config/db.config');
var item_supplier = function(supplier){
    this.id = supplier.id;
    this.item_supplier = supplier.item_supplier;
    this.phone = supplier.phone;
    this.email = supplier.email;
    this.address = supplier.address;
    this.contact_person_name = supplier.contact_person_name;
    this.contact_person_phone = supplier.contact_person_phone;
    this.contact_person_email = supplier.contact_person_email;
    this.description = supplier.description;
    this.created_at = supplier.created_at;
}

item_supplier.getitem_supplier = (result)=>{
    dbconn.query('select * from item_supplier',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('item supplier occured');
            result(null,res);
        }
    })
}

item_supplier.createitem_supplier = (supplier,result)=>{
    dbconn.query('insert into item_supplier SET?',supplier,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('item supplier inserted successfully');
            result(null,res);
        }
    })
}

module.exports = item_supplier;