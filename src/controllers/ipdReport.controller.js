const IpdReportModel = require('../models/ipdReport.model')
exports.getIpdReport = (req,res)=>{

    let updatedQuery = 'select ipd_details.date ,ipd_details.id,ipd_details.symptoms,patients.patient_name,patients.age,patients.gender,patients.mobileno,patients.guardian_name,staff.name,staff.surname,ipd_prescription_basic.finding_description from ipd_details left join ipd_prescription_basic on ipd_details.id = ipd_prescription_basic.ipd_id left join patients on patients.id = ipd_details.patient_id left join staff on staff.id = ipd_details.cons_doctor where ipd_details.id ';
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(ipd_details.date ) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(ipd_details.date ) = year(now()) and week(ipd_details.date ) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(ipd_details.date ) =year(now()) and week(ipd_details.date ) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(curdate()) and month(ipd_details.date ) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 1 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 3 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last6Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 6 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last9Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 9 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last12Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 12 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(now()) - 1 '
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
            updatedQuery += ' and ipd_details.symptoms like ?';
            updatedValues.push('%'+req.query.symptoms+'%')
        }
        if(req.query.findings){
            updatedQuery += ' and ipd_prescription_basic.finding_description like ?'
            updatedValues.push('%'+req.query.findings+'%')
        }
        IpdReportModel.setQuery(updatedQuery,updatedValues)
    IpdReportModel.GetIpdReport((err,ipdReport)=>{

      
        if(err)
        res.send(err);
     
        console.log('ipdReport ',ipdReport);
        res.send(ipdReport);
    
    })
}