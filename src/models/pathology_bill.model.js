var dbconn = require('../../config/db.config');
var PathologyBillTest = function(test){
    this.id = test.id;
    this.case_id = test.case_id;
    this.date = test.date;
    this.patient_name = test.patient_name;
    this.doctor_name = test.doctor_name;
    this.amount = test.amount;
    this.net_amount = test.net_amount;
    this.balance_amount = test.balance_amount;
   

}

let query = 'SELECT pb.id, pb.case_reference_id, pb.date, pb.doctor_name, p.patient_name, t.amount AS transaction_amount, pb.net_amount, (pb.net_amount - t.amount) AS balance_amount FROM pathology_billing pb JOIN patients p ON pb.patient_id = p.id JOIN transactions t ON pb.transaction_id = t.id;';
let values = ['']
PathologyBillTest.setValues=(updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}


PathologyBillTest.getpathologybilltest = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('pathology test fetched');
            result(null,res);
        }
    })
}



module.exports = PathologyBillTest; 