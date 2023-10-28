const BloodDonorReportModel = require('../models/bloodDonorReport.model')
exports.GetBloodDonorReport = (req,res)=>{
    let updatedQuery = ' select blood_bank_products.name as blood_group, concat(blood_donor_cycle.bag_no," " ,"(",blood_donor_cycle.volume," ",charge_units.unit,")") as bags, blood_donor.donor_name, floor(DATEDIFF(CURDATE(), blood_donor.date_of_birth) / 365 )AS age, blood_donor_cycle.donate_date, blood_donor_cycle.apply_charge, blood_donor_cycle.discount_percentage, blood_donor_cycle.tax_percentage, blood_donor_cycle.amount, transactions.amount as paid_amount from blood_donor_cycle join blood_donor on blood_donor.id = blood_donor_cycle.blood_donor_id join blood_bank_products on blood_bank_products.id = blood_donor.blood_bank_product_id join charge_units on charge_units.id = blood_donor_cycle.unit join transactions on transactions.blood_donor_cycle_id = blood_donor_cycle.id where blood_donor_cycle.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(blood_donor_cycle.donate_date) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(now()) and week(blood_donor_cycle.donate_date) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) =year(now()) and week(blood_donor_cycle.donate_date) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(curdate()) and month(blood_donor_cycle.donate_date) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(date_sub(now(),interval 1 month)) and month(blood_donor_cycle.donate_date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(date_sub(now(),interval 3 month)) and month(blood_donor_cycle.donate_date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(date_sub(now(),interval 6 month)) and month(blood_donor_cycle.donate_date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(date_sub(now(),interval 9 month)) and month(blood_donor_cycle.donate_date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(date_sub(now(),interval 12 month)) and month(blood_donor_cycle.donate_date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(blood_donor_cycle.donate_date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(blood_donor_cycle.donate_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( blood_donor_cycle.donate_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

    if(req.query.bloodGroup){
        updatedQuery += 'and blood_donor.blood_bank_product_id = ? '
        updatedValues.push(req.query.bloodGroup)
    }

    if(req.query.bloodDonor){
        updatedQuery +=' and blood_donor.id = ? '
        updatedValues.push(req.query.bloodDonor)
    }

    BloodDonorReportModel.setQuery(updatedQuery,updatedValues);
    BloodDonorReportModel.GetBloodDonorReport((err,BloodDonorReport)=>{
        if(err)
        res.send(err);

        console.log('Blood donor Report ',BloodDonorReport);
        res.send(BloodDonorReport);
    })









}