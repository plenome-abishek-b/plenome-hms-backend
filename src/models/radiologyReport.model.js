var dbConn = require('../../config/db.config');

var RadiologyReport = function(radiologyReport){
    this.id = radiologyReport.id;
    this.radiology_bill_id = radiologyReport.radiology_bill_id;
    this.radiology_id = radiologyReport.radiology_id;
    this.patient_id = radiologyReport.patient_id;
    this.customer_type = radiologyReport.customer_type;
    this.patient_name = radiologyReport.patient_name;
    this.consultant_doctor = radiologyReport.consultant_doctor;
    this.reporting_date = radiologyReport.reporting_date;
    this.parameter_update = radiologyReport.parameter_update;
    this.description = radiologyReport.description;
    this.radiology_report = radiologyReport.radiology_report;
    this.report_name = radiologyReport.report_name;
    this.radiology_result = radiologyReport.radiology_result;
    this.tax_percentage = radiologyReport.tax_percentage;
    this.apply_charge = radiologyReport.apply_charge;
    this.radiology_center = radiologyReport.radiology_center;
    this.generated_by = radiologyReport.generated_by;
    this.collection_specialist = radiologyReport.collection_specialist;
    this.collection_date = radiologyReport.collection_date;
    this.approved_by = radiologyReport.approved_by;
    this.created_at = radiologyReport.created_at;
}

RadiologyReport.getreport= (result)=>{
    dbConn.query('select * from radiology_report ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('radiology_report details  fetched ');
            result(null,res);
        }
    })
}

RadiologyReport.createreport= (ReportData,result)=>{
    const values = ReportData.map((data)=>{

        return[
          //  data.id,
            data.radiology_bill_id,
            data.radiology_id,
            data.patient_id,
            data.customer_type,
            data.patient_name,
            data.consultant_doctor,
            data.reporting_date,
            data.parameter_update,
            data.description,
            data.radiology_report,
            data.report_name,
            data.radiology_result,
            data.tax_percentage,
            data.apply_charge,
            data.radiology_center,
            data.collection_specialist,
            data.collection_date,
            data.approved_by,
            data.created_at
        ];
    })
    dbConn.query('insert into radiology_report (radiology_bill_id, radiology_id, patient_id,customer_type, patient_name,consultant_doctor, reporting_date,parameter_update,description,radiology_report,report_name,radiology_result,tax_percentage,apply_charge,radiology_center,collection_specialist,collection_date,approved_by,created_at) values ?', [values], (err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('radiology_report details Data inserted Successfully');
            // return the inserted detail objects
            console.log(res,"sssss");
            result(null, ReportData);
        }
    
    });
}
module.exports = RadiologyReport;