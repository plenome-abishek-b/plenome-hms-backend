var dbConn = require('../../config/db.config');

var BillBasic = function(billBasic){
    this.id = billBasic.id;
    this.date = billBasic.date;
    this.patient_id = billBasic.patient_id;
    this.ipd_prescription_basic_id = billBasic.ipd_prescription_basic_id;
    this.case_reference_id = billBasic.case_reference_id;
    this.customer_name = billBasic.customer_name;
    this.customer_type = billBasic.customer_type;
    this.doctor_name = billBasic.doctor_name;
    this.file = billBasic.file;
    this.total = billBasic.total;
    this.discount_percentage = billBasic.discount_percentage;
    this.discount = billBasic.discount;
    this.tax_percentage = billBasic.tax_percentage;
    this.tax = billBasic.tax;
    this.net_amount = billBasic.net_amount;
    this.note = billBasic.note;
    this.generated_by = billBasic.generated_by;
    this.created_at = billBasic.created_at;

}
BillBasic.getBills = (result)=>{
    dbConn.query('select pharmacy_bill_basic.*,patients.patient_name,transactions.section,transactions.amount as paid_amount from pharmacy_bill_basic join patients on patients.id = pharmacy_bill_basic.patient_id join transactions on transactions.pharmacy_bill_basic_id = pharmacy_bill_basic.id;',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('purchase details  fetched ');
            result(null,res);
        }
    })
}

BillBasic.createBills = (billData,result)=>{
    dbConn.query('insert into pharmacy_bill_basic SET ?',billData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('pharmacy bill Data inserted Successfully');
            result(null,res)
        }
    
    });
}
module.exports = BillBasic