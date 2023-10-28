var dbConn = require('../../config/db.config');

var PurchaseDetails = function(purchaseDetails){
    this.id = purchaseDetails.id;
    this.supplier_bill_basic_id = purchaseDetails.supplier_bill_basic_id;
    this.pharmacy_id = purchaseDetails.pharmacy_id;
    this.inward_date = purchaseDetails.inward_date;
    this.expiry = purchaseDetails.expiry;
    this.batch_no = purchaseDetails.batch_no;
    this.packing_qty = purchaseDetails.packing_qty;
    this.purchase_rate_packing = purchaseDetails.purchase_rate_packing;
    this.quantity = purchaseDetails.quantity;
    this.mrp = purchaseDetails.mrp;
    this.purchase_price = purchaseDetails.purchase_price;
    this.tax = purchaseDetails.tax;
    this.sale_rate = purchaseDetails.sale_rate;
    this.batch_amount = purchaseDetails.batch_amount;
    this.amount = purchaseDetails.amount;
    this.available_quantity = purchaseDetails.available_quantity;
    this.created_at = purchaseDetails.created_at;
}

PurchaseDetails.createDetails = (detailsData,result)=>{
    const values = detailsData.map((data) => {
    
        return [
          //  data.id,
            data.supplier_bill_basic_id,
            data.pharmacy_id,
            data.inward_date,
            data.expiry,
            data.batch_no,
            data.packing_qty,
            data.purchase_rate_packing,
            data.quantity,
            data.mrp,
            data.purchase_price,
            data.tax,
            data.sale_rate,
            data.batch_amount,
            data.amount,
            data.available_quantity,
            data.created_at

            
          ];
    
    });
    dbConn.query('insert into medicine_batch_details (supplier_bill_basic_id, pharmacy_id, inward_date,expiry, batch_no, packing_qty,purchase_rate_packing,quantity,mrp,purchase_price,tax,sale_rate,batch_amount,amount,available_quantity,created_at) values ?', [values], (err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('prescription details Data inserted Successfully');
            // return the inserted detail objects
            result(null, detailsData);
        }
    
    });
}


PurchaseDetails.getPurchaseDetails = (result)=>{
    dbConn.query('select * from medicine_batch_details ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('medicine_batch_details   fetched ');
            result(null,res);
        }
    })
}
module.exports = PurchaseDetails;