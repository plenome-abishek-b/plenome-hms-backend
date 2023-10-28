const dischargedReportModel = require('../models/dischargedReport.model');
exports.getReport = (req,res)=>{
    console.log('entering controller');
   let updatedQuery = 'select patients.patient_name,ipd_details.id,ipd_details.case_reference_id,patients.gender,patients.mobileno,staff.name,staff.surname,ipd_details.date,bed.name as bed_name,ipd_details.discharged,discharge_card.discharge_status,discharge_card.discharge_date,TIMESTAMPDIFF(DAY, (ipd_details.date),(discharge_card.discharge_date)) as admittedDays from ipd_details join discharge_card on discharge_card.ipd_details_id = ipd_details.id join patients on patients.id = ipd_details.patient_id join staff on staff.id = ipd_details.cons_doctor join bed on bed.id = ipd_details.bed where discharged = ?';
    let updatedValues = ['yes'];
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(date) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(date) = year(now()) and week(date) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(date) =year(now()) and week(date) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(date) = year(curdate()) and month(date) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(date) = year(date_sub(now(),interval 1 month)) and month(date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(date) = year(date_sub(now(),interval 3 month)) and month(date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
                case 'Last6Months' :
                    {
                        updatedQuery += 'and year(date) = year(date_sub(now(),interval 6 month)) and month(date) = month(date_sub(now(),interval 6 month))'
                        break;
                    }
                    case 'Last9Months' :
                        {
                            updatedQuery += 'and year(date) = year(date_sub(now(),interval 9 month)) and month(date) = month(date_sub(now(),interval 9 month))'
                            break;
                        }
                        case 'Last12Months' :
                            {
                                updatedQuery += 'and year(date) = year(date_sub(now(),interval 12 month)) and month(date) = month(date_sub(now(),interval 12 month))'
                                break;
                            }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(date) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(date) = year(now()) - 1 '
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
        if (req.query.gender) {
            updatedQuery += 'AND patients.gender = ?';
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