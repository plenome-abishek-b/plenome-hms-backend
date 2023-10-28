const opdDischargedReportModel = require('../models/opdDischargedReport.model');

exports.GetOpdDischargedReport = (req,res)=>{

    let updatedQuery = 'select patients.patient_name,patients.gender,patients.age,patients.mobileno,opd_details.id as opd_id ,opd_details.case_reference_id,concat(staff.name," ",staff.surname) as consultant,visit_details.appointment_date,discharge_card.discharge_date,discharge_status.status,(TIMESTAMPDIFF(day,visit_details.appointment_date,discharge_card.discharge_date))+1 as admitted_days from discharge_card join opd_details on opd_details.id = discharge_card.opd_details_id join visit_details on visit_details.opd_details_id = opd_details.id join patients on patients.id = opd_details.patient_id join staff on staff.id = visit_details.cons_doctor join discharge_status on discharge_status.id = discharge_card.discharge_status where opd_details.id ';
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(visit_details.appointment_date) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(visit_details.appointment_date) = year(now()) and week(visit_details.appointment_date) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) =year(now()) and week(visit_details.appointment_date) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(curdate()) and month(visit_details.appointment_date) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 1 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 3 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
                case 'Last6Months' :
                    {
                        updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 6 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 6 month))'
                        break;
                    }
                    case 'Last9Months' :
                        {
                            updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 9 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 9 month))'
                            break;
                        }
                        case 'Last12Months' :
                            {
                                updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 12 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 12 month))'
                                break;
                            }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(now()) - 1 '
                    break;
                }
                }

        }
        
        if(req.query.doctor){
            updatedQuery += 'and  visit_details.cons_doctor = ?';
            updatedValues.push(req.query.doctor);
            }
        if(req.query.fromAge){
            updatedQuery += 'and  patients.age >= ?';
            updatedValues.push(req.query.fromAge);
            }
        if(req.query.toAge){
            updatedQuery += 'and  patients.age <= ?';
            updatedValues.push(req.query.toAge);
            }
            if (req.query.gender) {
                updatedQuery += 'AND patients.gender = ?';
                updatedValues.push(req.query.gender);
              } 
        if(req.query.dischargeStatus){
            updatedQuery += 'and  discharge_card.discharge_status = ?';
            updatedValues.push(req.query.dischargeStatus);
            }

            opdDischargedReportModel.setQuery(updatedQuery,updatedValues)
            opdDischargedReportModel.GetOpdDischargedReport((err,opdDischargedReport)=>{
                if(err)
                res.send(err);

                console.log('opdDischargedReport ',opdDischargedReport);
                res.send(opdDischargedReport);
            })

}