var dbConn = require('../../config/db.config');

var PharmacyBillDetails = function(pharcyBillDetails){
    this.id = pharcyBillDetails.id;
    this.pharmacy_bill_basic_id = pharcyBillDetails.pharmacy_bill_basic_id;
    this.medicine_batch_detail_id = pharcyBillDetails.medicine_batch_detail_id;
    this.quantity = pharcyBillDetails.quantity;
    this.sale_price = pharcyBillDetails.sale_price;
    this.amount = pharcyBillDetails.amount;
    this.created_at = pharcyBillDetails.created_at;

}
PharmacyBillDetails.getBillDetails = (result)=>{
    dbConn.query('select * from pharmacy_bill_detail ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('pharmacy_bill_detail details  fetched ');
            result(null,res);
        }
    })
}

PharmacyBillDetails.createBillDetails = (BillDetailsData,result)=>{
    const values = BillDetailsData.map((data)=>{

        return[
          //  data.id,
            data.pharmacy_bill_basic_id,
            data.medicine_batch_detail_id,
            data.quantity,
            data.sale_price,
            data.amount,
            data.created_at
        ];
    })
    dbConn.query('insert into pharmacy_bill_detail (pharmacy_bill_basic_id, medicine_batch_detail_id, quantity,sale_price, amount, created_at) values ?', [values], (err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('prescription details Data inserted Successfully');
            // return the inserted detail objects
            console.log(res,"sssss");
            result(null, BillDetailsData);
        }
    
    });
}
module.exports = PharmacyBillDetails;