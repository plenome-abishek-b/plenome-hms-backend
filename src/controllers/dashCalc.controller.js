const DashCalcModel = require('../models/dashCalc.model')


exports.getDashCalc= (req,res)=>{

    let updatedQuery = `select
    coalesce(( select sum(transactions.amount) from transactions where (appointment_id or opd_id) and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)opdIncome,
    coalesce((select sum(transactions.amount) from transactions where ipd_id and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)ipdIncome,
    coalesce((select sum(transactions.amount) from transactions where pharmacy_bill_basic_id and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)pharmacyIncome,
    coalesce((select sum(transactions.amount) from transactions where pathology_billing_id and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)pathologyIncome,
    coalesce((select sum(transactions.amount) from transactions where radiology_billing_id and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)radiologyIncome,
    coalesce((select sum(transactions.amount) from transactions where ambulance_call_id and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)ambulanceIncome,
    coalesce((select sum(transactions.amount) from transactions where (blood_donor_cycle_id or blood_issue_id) and year(transactions.payment_date) = year(current_date()) and month(transactions.payment_date) =month(current_date())),0)bloodIncome,
    coalesce((select sum(income.amount) from income where year(income.date) = year(current_date()) and month(income.date) =month(current_date())),0)generalIncome,
    coalesce((select sum(expenses.amount) from expenses where year(expenses.date) = year(current_date()) and month(expenses.date) =month(current_date())),0)generalexpenses`
     let updatedValue = []
     

     DashCalcModel.setQuery(updatedQuery,updatedValue)
     DashCalcModel.getDashCalc ((err,count)=>{
             if(err)
             res.send(err);
          
             console.log('dashboard calculation ',count);
             res.send(count);
         })
    }