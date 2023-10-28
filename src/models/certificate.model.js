var dbConn = require('../../config/db.config');
var Certificate_template = function(certificate_template){
    this.id = certificate_template.id;
    this.certificate_name = certificate_template.certificate_name;
    this.certificate_text = certificate_template.certificate_text;
    this.left_header = certificate_template.left_header;
    this.center_header = certificate_template.center_header;
    this.right_header = certificate_template.right_header;
    this.left_footer = certificate_template.left_footer;
    this.right_footer = certificate_template.right_footer;
    this.center_footer = certificate_template.center_footer;
    this.background_image = certificate_template.background_image;
    this.created_for = certificate_template.created_for;
    this.status = certificate_template.status;
    this.header_height = certificate_template.header_height;
    this.content_height = certificate_template.content_height;
    this.footer_height = certificate_template.footer_height;
    this.content_width = certificate_template.content_width;
    this.enable_patient_image = certificate_template.enable_patient_image;
    this.enable_image_height = certificate_template.enable_image_height;
    this.updated_at = certificate_template.updated_at;
    this.created_at = certificate_template.created_at;

}

Certificate_template.createCertificate = (certificateData,result)=>{
    dbConn.query('insert into certificates SET ?',certificateData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('certificate Data inserted Successfully');
            result(null,res)
        }
    });
}

Certificate_template.getCertificate = (result)=>{
    dbConn.query('SELECT * FROM certificates',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('certificates fetched ');
            result(null,res);
        }
    })
}

module.exports = Certificate_template;