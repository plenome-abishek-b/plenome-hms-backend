const OpdReportModel = require('../models/opdReport.model');
exports.getOpdReport = (req,res)=>{

    let updatedQuery = 'select visit_details.appointment_date,visit_details.opd_details_id,visit_details.id as checkup_id,patients.patient_name,patients.age,patients.gender,patients.mobileno,patients.guardian_name,visit_details.symptoms,staff.name,staff.surname from visit_details join opd_details on opd_details.id = visit_details.opd_details_id join patients on patients.id = opd_details.patient_id join staff on staff.id = visit_details.cons_doctor where opd_details_id ';
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(appointment_date ) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(appointment_date ) = year(now()) and week(appointment_date ) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(appointment_date ) =year(now()) and week(appointment_date ) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(curdate()) and month(appointment_date ) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(date_sub(now(),interval 1 month)) and month(appointment_date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(date_sub(now(),interval 3 month)) and month(appointment_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last6Months' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(date_sub(now(),interval 6 month)) and month(appointment_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last9Months' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(date_sub(now(),interval 9 month)) and month(appointment_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last12Months' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(date_sub(now(),interval 12 month)) and month(appointment_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(appointment_date ) = year(now()) - 1 '
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
        
        if(req.query.symptoms){
            updatedQuery += ' and visit_details.symptoms like ?';
            updatedValues.push('%'+req.query.symptoms+'%')
        }
        // if(req.query.findings){
        //     updatedQuery += ' and ipd_prescription_basic.finding_description like ?'
        //     updatedValues.push('%'+req.query.findings+'%')
        // }
        OpdReportModel.setQuery(updatedQuery,updatedValues)
        OpdReportModel.GetOpdReport((err,opdReport)=>{

      
        if(err)
        res.send(err);
     
        console.log('opdReport ',opdReport);
        res.send(opdReport);
    
    })
}