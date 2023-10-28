const RadiologyPatientReportModel = require('../models/radiologyPatientReport.model')

exports.GetRadiologyPatientReport = (req,res)=>{
    let updatedQuery = 'select concat("RADB",radiology_billing.id) as bill_no,radiology_billing.date,concat(patients.patient_name,"(",patients.id,")") as patient_name,lab.lab_name as radio_category,concat(radio.test_name,"(",radio.short_name,")")as test_name,radiology_billing.note,concat(s1.name," ",s1.surname,"(",s1.employee_id,")") as consult_doctor,concat(s2.name," ",s2.surname,"(",s2.employee_id,")") as sample_collected_by,radiology_billing.net_amount as amount, coalesce((select sum(transactions.amount) from transactions where transactions.radiology_billing_id = radiology_billing.id),0) as paid_amount,((radiology_billing.net_amount) - (coalesce((select sum(transactions.amount) from transactions where transactions.radiology_billing_id = radiology_billing.id),0))) as balance_amount from radiology_report left join radio on radio.id = radiology_report.radiology_id left join radiology_billing on radiology_billing.id = radiology_report.radiology_bill_id left join patients on patients.id = radiology_report.patient_id left join staff as s1 on s1.id = radiology_billing.doctor_id left join staff as s2 on s2.id = radiology_report.collection_specialist left join lab on lab.id = radio.radiology_category_id where radio.id '   
     let updatedValues = []

     if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(radiology_billing.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(radiology_billing.date ) = year(now()) and week(radiology_billing.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) =year(now()) and week(radiology_billing.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(curdate()) and month(radiology_billing.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(date_sub(now(),interval 1 month)) and month(radiology_billing.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(date_sub(now(),interval 3 month)) and month(radiology_billing.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(date_sub(now(),interval 6 month)) and month(radiology_billing.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(date_sub(now(),interval 9 month)) and month(radiology_billing.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(date_sub(now(),interval 12 month)) and month(radiology_billing.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(radiology_billing.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(radiology_billing.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( radiology_billing.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.collectedBy){
            updatedQuery += ' and radiology_report.collection_specialist  = ? '
            updatedValues.push(req.query.collectedBy)
        }
        if(req.query.category){
            updatedQuery += ' and radio.radiology_category_id = ? '
            updatedValues.push(req.query.category)
        }
        if(req.query.test){
            updatedQuery += ' and radiology_report.radiology_id = ? '
            updatedValues.push(req.query.test)
        }


        RadiologyPatientReportModel.setQuery(updatedQuery,updatedValues);
        RadiologyPatientReportModel.GetRadiologyPatientReport((err,radiologyPatientReport)=>{
            if(err)
            res.send(err);
    
            console.log('Radiology patient Report ',radiologyPatientReport);
            res.send(radiologyPatientReport);
        })


}