const AmbulanceCallReportModel = require('../models/ambulanceCallReport.model');

exports.getAmbulanceCallReport = (req,res)=>{
    let updatedQuery = 'select concat("AMCB",ambulance_call.id) as call_no,concat(patients.patient_name,"(",patients.id,")") as patient_name,ambulance_call.date,patients.mobileno,vehicles.vehicle_no,vehicles.vehicle_model,vehicles.driver_name,patients.address,ambulance_call.net_amount,transactions.amount,(ambulance_call.net_amount - transactions.amount) as balance_amount from ambulance_call join patients on patients.id = ambulance_call.patient_id join vehicles on vehicles.id = ambulance_call.vehicle_id join transactions on transactions.ambulance_call_id = ambulance_call.id where ambulance_call.id   '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(ambulance_call.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(ambulance_call.date ) = year(now()) and week(ambulance_call.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) =year(now()) and week(ambulance_call.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(curdate()) and month(ambulance_call.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(date_sub(now(),interval 1 month)) and month(ambulance_call.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(date_sub(now(),interval 3 month)) and month(ambulance_call.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(date_sub(now(),interval 6 month)) and month(ambulance_call.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(date_sub(now(),interval 9 month)) and month(ambulance_call.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(date_sub(now(),interval 12 month)) and month(ambulance_call.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(ambulance_call.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(ambulance_call.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( ambulance_call.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
    if(req.query.collectedBy){
        updatedQuery += ' and transactions.received_by = ? '
        updatedValues.push(req.query.collectedBy)
    }
    if(req.query.vehicleModel){
        updatedQuery += ' and ambulance_call.vehicle_id = ? '
        updatedValues.push(req.query.vehicleModel)
    }

    AmbulanceCallReportModel.setQuery(updatedQuery,updatedValues);
    AmbulanceCallReportModel.GetAmbulanceCallReport((err,ambulanceCallReport)=>{
        if(err)
        res.send(err);

        console.log('Ambulance call Report ',ambulanceCallReport);
        res.send(ambulanceCallReport);
    })
}