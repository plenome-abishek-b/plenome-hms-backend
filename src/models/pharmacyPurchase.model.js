var dbConn = require('../../config/db.config');

var Purchase = function(purchase){
    this.id = purchase.id;
    this.invoice_no = purchase.invoice_no;
    this.date = purchase.date;
    this.supplier_id = purchase.supplier_id;
    this.file = purchase.file;
    this.total = purchase.total;
    this.tax = purchase.tax;
    this.discount = purchase.discount;
    this.net_amount = purchase.net_amount;
    this.note = purchase.note;
    this.payment_mode = purchase.payment_mode;
    this.cheque_no = purchase.cheque_no;
    this.cheque_date = purchase.cheque_date;
    this.payment_date = purchase.payment_date;
    this.received_by = purchase.received_by;
    this.attachment = purchase.attachment;
    this.attachment_name = purchase.attachment_name;
    this.payment_note = purchase.payment_note;
    this.created_at = purchase.created_at;
}
Purchase.getPurchase = (result)=>{
    dbConn.query('select supplier_bill_basic . *, medicine_supplier.supplier from supplier_bill_basic join medicine_supplier on medicine_supplier.id = supplier_bill_basic.supplier_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('purchase details  fetched ');
            result(null,res);
        }
    })
}

Purchase.createPurchase = (purchaseData,result)=>{
    dbConn.query('insert into supplier_bill_basic SET ?',purchaseData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('purchase Data inserted Successfully');
            result(null,res)
        }
    
    });
}
module.exports = Purchase;