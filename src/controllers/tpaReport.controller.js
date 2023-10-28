const TpaReportModel = require('../models/tpaReport.model')

exports.getTpaReport = (req,res) =>{
    let updatedQuery = ' select distinct patient_charges.id,concat("IPDN",ipd_details.id) billno,ipd_details.case_reference_id,("IPD") as Head,organisation.organisation_name as tpa_name,concat(patients.patient_name," (",patients.id,")") patient_name,ipd_details.date,concat(staff.name," ",staff.surname," (",staff.employee_id,")") doctor,charges.name as charge_name,charge_categories.name as chargeCategory_name,charge_type_master.charge_type,patient_charges.standard_charge,patient_charges.apply_charge,patient_charges.tpa_charge,concat("(",patient_charges.tax,"%)",(patient_charges.apply_charge*(patient_charges.tax/100))) tax, patient_charges.amount from patient_charges join ipd_details on ipd_details.id = patient_charges.ipd_id join patients on patients.id = ipd_details.patient_id join staff on staff.id = ipd_details.cons_doctor join organisation on organisation.id = ipd_details.organisation_id join organisations_charges on organisations_charges.org_id = organisation.id join charges on charges.id = patient_charges.charge_id join charge_categories on charge_categories.id = charges.charge_category_id join charge_type_master on charge_type_master.id = charge_categories.charge_type_id  where patient_charges.id  '
    let updatedQuery1 = ' select patient_charges.id,concat("OCID",opd_details.id) as billno,opd_details.case_reference_id,("OPD")as Head,organisation.organisation_name as tpa_name,concat(patients.patient_name," (",patients.id,")") patient_name,visit_details.appointment_date,concat(staff.name," ",staff.surname," (",staff.employee_id,")") doctor,charges.name as charge_name,charge_categories.name as chargeCategory_name,charge_type_master.charge_type,patient_charges.standard_charge,patient_charges.apply_charge,patient_charges.tpa_charge,concat("(",patient_charges.tax,"%)",(patient_charges.apply_charge*(patient_charges.tax/100))) tax,patient_charges.amount from visit_details join opd_details on opd_details.id = visit_details.opd_details_id join organisation on organisation.id = visit_details.organisation_id join patients on patients.id = opd_details.patient_id join staff on staff.id = visit_details.cons_doctor join patient_charges on patient_charges.opd_id = opd_details.id join charges on charges.id = patient_charges.charge_id join charge_categories on charge_categories.id = charges.charge_category_id join charge_type_master on charge_type_master.id = charge_categories.charge_type_id where patient_charges.id    '
    let updatedQuery2 = ' union '
    let updatedValues = []
    let updatedValues1 = []


    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(ipd_details.date ) = curdate()';
                updatedQuery1 += 'and date(visit_details.appointment_date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(ipd_details.date ) = year(now()) and week(ipd_details.date ) = week(now()) ';
                updatedQuery1 += 'and year(visit_details.appointment_date ) = year(now()) and week(visit_details.appointment_date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(ipd_details.date ) =year(now()) and week(ipd_details.date ) = week(now())-1';
                    updatedQuery1 += 'and year(visit_details.appointment_date ) =year(now()) and week(visit_details.appointment_date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(curdate()) and month(ipd_details.date ) = month(curdate())';
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(curdate()) and month(visit_details.appointment_date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 1 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 1 month))'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(date_sub(now(),interval 1 month)) and month(visit_details.appointment_date ) = month(date_sub(now(),interval 1 month))'
                    break;
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 3 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 3 month))'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(date_sub(now(),interval 3 month)) and month(visit_details.appointment_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 6 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 6 month))'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(date_sub(now(),interval 6 month)) and month(visit_details.appointment_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 9 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 9 month))'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(date_sub(now(),interval 9 month)) and month(visit_details.appointment_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(date_sub(now(),interval 12 month)) and month(ipd_details.date ) = month(date_sub(now(),interval 12 month))'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(date_sub(now(),interval 12 month)) and month(visit_details.appointment_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(now())'
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(ipd_details.date ) = year(now()) - 1 '
                    updatedQuery1 += 'and year(visit_details.appointment_date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(ipd_details.date) >= ?' 
                        updatedQuery1 += ' and date(visit_details.appointment_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
                        updatedValues1.push(req.query.fromDate)

            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( ipd_details.date) <= ?' 
                        updatedQuery1 += ' and date( visit_details.appointment_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
                        updatedValues1.push(req.query.ToDate)

            
                    }
                }
           
                }

        }
        if(req.query.doctor){
            updatedQuery += ' and ipd_details.cons_doctor = ? '
            updatedValues.push(req.query.doctor)
            updatedQuery1 += ' and visit_details.cons_doctor = ? '
            updatedValues1.push(req.query.doctor)


        }
        if(req.query.tpa){
            updatedQuery += ' and organisation.id = ? '
            updatedValues.push(req.query.tpa)
            updatedQuery1 += ' and organisation.id = ? '
            updatedValues1.push(req.query.tpa)
        }
        if(req.query.caseId){
            updatedQuery += ' and ipd_details.case_reference_id = ? '
            updatedValues.push(req.query.caseId)
            updatedQuery1 += ' and opd_details.case_reference_id = ? '
            updatedValues1.push(req.query.caseId)
        }
        if(req.query.chargeCategory){
            updatedQuery += ' and charge_categories.id = ? '
            updatedValues.push(req.query.chargeCategory)
            updatedQuery1 += ' and charge_categories.id = ? '
            updatedValues1.push(req.query.chargeCategory)
        }
        if(req.query.charge){
            updatedQuery += ' and charges.id = ? '
            updatedValues.push(req.query.charge)
            updatedQuery1 += ' and charges.id = ? '
            updatedValues1.push(req.query.charge)
        }

        let updatedQuery3 = updatedQuery+" "+updatedQuery2+" "+updatedQuery1
        updatedValues = updatedValues.concat(updatedValues1)
        

        TpaReportModel.setQuery(updatedQuery3,updatedValues);
        TpaReportModel.GetTpaReport((err,tpaReport)=>{
            if(err)
            res.send(err);
    
            console.log('TPA Report ',tpaReport);
            res.send(tpaReport);
        })

}