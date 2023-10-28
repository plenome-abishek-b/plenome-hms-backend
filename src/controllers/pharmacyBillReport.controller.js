const PharmacyBillReportModel =require('../models/pharmacyBillReport.model')

exports.getPharmacyBillReport = (req,res)=>{
    let updatedQuery = 'select distinct concat("PHAB",pharmacy_bill_basic.id) as bill_no,pharmacy_bill_basic.date,patients.patient_name,concat(patients.age," Years ",patients.month," Months ",patients.day," Days ") as age,patients.gender, concat("IPDP",pharmacy_bill_basic.ipd_prescription_basic_id) as prescription_no,pharmacy_bill_basic.doctor_name,concat(staff.name," ",staff.surname,"(",staff.employee_id,")") as collected_by, pharmacy_bill_basic.net_amount as total,coalesce((select sum(transactions.amount) from transactions where transactions.pharmacy_bill_basic_id = pharmacy_bill_basic.id),0) as paid_amount,(pharmacy_bill_basic.net_amount - coalesce((select sum(transactions.amount) from transactions where transactions.pharmacy_bill_basic_id = pharmacy_bill_basic.id),0)) as balance_amount  from pharmacy_bill_basic join patients on patients.id = pharmacy_bill_basic.patient_id join staff on staff.id = pharmacy_bill_basic.generated_by left join transactions on transactions.pharmacy_bill_basic_id = pharmacy_bill_basic.id where pharmacy_bill_basic.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(pharmacy_bill_basic.date) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(pharmacy_bill_basic.date) = year(now()) and weekpharmacy_bill_basic.date) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) =year(now()) and weekpharmacy_bill_basic.date) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(curdate()) and monthpharmacy_bill_basic.date) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(date_sub(now(),interval 1 month)) and monthpharmacy_bill_basic.date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(date_sub(now(),interval 3 month)) and monthpharmacy_bill_basic.date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(date_sub(now(),interval 6 month)) and monthpharmacy_bill_basic.date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(date_sub(now(),interval 9 month)) and monthpharmacy_bill_basic.date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(date_sub(now(),interval 12 month)) and monthpharmacy_bill_basic.date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(pharmacy_bill_basic.date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(pharmacy_bill_basic.date) >= ? ' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( visit_details.appointment_date) <= ? ' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }


        if(req.query.fromAge){
            updatedQuery += ' and  patients.age >= ? ';
            updatedValues.push(req.query.fromAge);
            }
        if(req.query.toAge){
            updatedQuery += ' and  patients.age <= ?  ';
            updatedValues.push(req.query.toAge);
            }
            if(req.query.gender){
                updatedQuery += ' and  patients.gender = ? ' ;
                updatedValues.push(req.query.gender);
                }
 
        if(req.query.paymentMode){
            updatedQuery += ' and  transactions.payment_mode = ? ' ;
            updatedValues.push(req.query.paymentMode);
        }

        if(req.query.collectedBy){
            updatedQuery += ' and  pharmacy_bill_basic.generated_by = ? ' ;
            updatedValues.push(req.query.collectedBy);
        }

                PharmacyBillReportModel.setQuery(updatedQuery,updatedValues);
                PharmacyBillReportModel.GetPharmacyBillReport((err,pharmacyBillReport)=>{
                    if(err)
                    res.send(err);
            
                    console.log('Pharmacy bill Report ',pharmacyBillReport);
                    res.send(pharmacyBillReport);
                })
            


}