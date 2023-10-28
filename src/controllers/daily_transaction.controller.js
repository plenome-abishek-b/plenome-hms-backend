const daily_transaction_reportmodel = require('../models/daily_transaction.model');

exports.getdaily_transaction_report = (req,res) =>{
    let updatedquery = ' ';
    let updatedvalues = [];

    if(req.query.fromDate) {
        updatedquery = ` SELECT   DATE(transactions.payment_date) AS payment_date, COUNT(*) AS totalTransaction, 
        SUM(CASE  WHEN transactions.payment_mode IN ("cash", "cheque") THEN transactions.amount ELSE 0.00 END) AS offline, 
        SUM(CASE   WHEN transactions.payment_mode IN ("upi", "online", "other", "transfer to bank account") THEN transactions.amount  ELSE 0.00 END) AS online,
        ((SUM(CASE  WHEN transactions.payment_mode IN ("cash", "cheque") THEN transactions.amount ELSE 0.00 END) ) + 
        (SUM(CASE   WHEN transactions.payment_mode IN ("upi", "online", "other", "transfer to bank account") THEN transactions.amount  ELSE 0.00 END))
         )
        total
          FROM  
         transactions WHERE transactions.payment_date BETWEEN "2023-04-31" AND "2023-06-30"   GROUP BY    DATE(transactions.payment_date)
          `
        ;
        updatedvalues.push(req.query.fromDate);
    }
    if(req.query.toDate) {
       
        updatedvalues.push(req.query.toDate);
    }


    daily_transaction_reportmodel.setquery(updatedquery,updatedvalues);
    daily_transaction_reportmodel.getdaily_transaction_report((err,daily_transaction_report)=>{
        if(err) {
            res.send(err);
        }

        console.log('daily transaction report success',daily_transaction_report);
        res.send(daily_transaction_report);
    });
};