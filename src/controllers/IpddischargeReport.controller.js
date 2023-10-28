const dischargedReportModel = require('../models/IpddischargedReport.model');
exports.getReport = (req,res)=>{
    console.log('entering controller');
   let updatedQuery = ' select patients.patient_name,patients.gender,patients.mobileno,ipd_details.id as ipd_id,ipd_details.case_reference_id,ipd_details.date,staff.name,staff.surname,bed.name as bed_name,discharge_card.discharge_date,discharge_card.discharge_status,timestampdiff(day,ipd_details.date,discharge_card.discharge_date)  as admitted_days from patients join ipd_details on ipd_details.patient_id = patients.id join staff on staff.id = ipd_details.cons_doctor join bed on bed.id = ipd_details.bed join discharge_card on discharge_card.ipd_details_id = ipd_details.id where ipd_details.discharged ';
    let updatedValues = [];
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += ' and date(date) = curdate() ';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += ' and year(date) = year(now()) and week(date) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += ' and year(date) =year(now()) and week(date) = week(now())-1 ';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += ' and year(date) = year(curdate()) and month(date) = month(curdate()) ';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += ' and year(date) = year(date_sub(now(),interval 1 month)) and month(date) = month(date_sub(now(),interval 1 month)) '
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += ' and year(date) = year(date_sub(now(),interval 3 month)) and month(date) = month(date_sub(now(),interval 3 month)) '
                    break;
                }
                case 'Last 6 Months' :
                    {
                        updatedQuery += ' and year(date) = year(date_sub(now(),interval 6 month)) and month(date) = month(date_sub(now(),interval 6 month)) '
                        break;
                    }
                    case 'Last 9 Months' :
                        {
                            updatedQuery += ' and year(date) = year(date_sub(now(),interval 9 month)) and month(date) = month(date_sub(now(),interval 9 month)) '
                            break;
                        }
                        case 'Last 12 Months' :
                            {
                                updatedQuery += ' and year(date) = year(date_sub(now(),interval 12 month)) and month(date) = month(date_sub(now(),interval 12 month)) '
                                break;
                            }
            case 'This Year' :
                {
                    updatedQuery += ' and year(date) = year(now()) '
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += ' and year(date) = year(now()) - 1 '
                    break;
                }
                }

        }
    if(req.query.doctor){
        updatedQuery += 'and  cons_doctor = ?';
        updatedValues.push(req.query.doctor);
        }
    if(req.query.fromAge){
        updatedQuery += 'and  age >= ?';
        updatedValues.push(req.query.fromAge);
        }
    if(req.query.toAge){
        updatedQuery += 'and  age <= ?';
        updatedValues.push(req.query.toAge);
        }
    if(req.query.gender){
        updatedQuery += 'and  gender = ?';
        updatedValues.push(req.query.gender);
        }
    if(req.query.dischargeStatus){
        updatedQuery += 'and  discharge_status = ?';
        updatedValues.push(req.query.dischargeStatus);
        }
    dischargedReportModel.setQuery(updatedQuery,updatedValues)
    dischargedReportModel.getReport((err,report)=>{
        if(err)
        res.send(err);

        console.log('discharge report',report);
        res.send(report);
    })
}