const AppointmentReportModel = require('../models/appointmentReport.model');

exports.getAppointmentReport = (req,res)=>{
    let updatedQuery = 'select patients.patient_name,patients.mobileno,patients.gender,staff.id,concat(staff.name," ",staff.surname,"(",staff.employee_id,")") as doctor,appointment.date,appointment.appointment_status,appointment.source,appointment_payment.paid_amount from appointment join patients on patients.id = appointment.patient_id join appointment_payment on appointment_payment.appointment_id = appointment.id join staff on staff.id = appointment.doctor where appointment.id ';
    let updatedValues = []
console.log(req.query,"k")
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(appointment.date ) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(appointment.date ) = year(now()) and week(appointment.date ) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(appointment.date ) =year(now()) and week(appointment.date ) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(curdate()) and month(appointment.date ) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(date_sub(now(),interval 1 month)) and month(appointment.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(date_sub(now(),interval 3 month)) and month(appointment.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last6Months' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(date_sub(now(),interval 6 month)) and month(appointment.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last9Months' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(date_sub(now(),interval 9 month)) and month(appointment.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last12Months' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(date_sub(now(),interval 12 month)) and month(appointment.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(appointment.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(appointment.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.toDate){
                        updatedQuery += ' and date( appointment.date) <= ?' 
                        updatedValues.push(req.query.toDate)
            
                    }
                }
           
                }

        }

    if(req.query.doctor){
        updatedQuery += 'and appointment.doctor = ? '
        updatedValues.push(req.query.doctor)
    }
    if(req.query.shift){
        updatedQuery += ' and appointment.global_shift_id = ?';
        updatedValues.push(req.query.shift)
    }
    if(req.query.priority){
        updatedQuery += ' and appointment.priority = ? '
        updatedValues.push(req.query.priority)
    }
    if(req.query.source){
        updatedQuery +=' AND appointment.source = ?'
        updatedValues.push(req.query.source)
    }
    AppointmentReportModel.setQuery(updatedQuery,updatedValues);
    AppointmentReportModel.getAppointmentReport((err,appointmentReport)=>{
        if(err)
        res.send(err);

        console.log('Appointment Report ',appointmentReport);
        res.send(appointmentReport);
    })
}