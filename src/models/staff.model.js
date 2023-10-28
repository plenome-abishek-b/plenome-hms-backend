var dbconn = require('../../config/db.config');
var Staff = function (staff){
    this.id = staff.id;
    this.employee_id = staff.employee_id;
    this.lang_id = staff.lang_id;
    this.department_id = staff.department_id;
    this.staff_designation_id = staff.staff_designation_id;
    this.specialist = staff.specialist;
    this.qualification = staff.qualification;
    this.work_exp = staff.work_exp;
    this.specialization = staff.specialization;
    this.name = staff.name;
    this.surname = staff.surname;
    this.father_name = staff.father_name;
    this.mother_name = staff.mother_name;
    this.contact_no = staff.contact_no;
    this.emergency_contact_no = staff.emergency_contact_no;
    this.email = staff.email;
    this.dob = staff.dob;
    this.marital_status=staff.marital_status;
    this.date_of_joining = staff.date_of_joining;
    this.date_of_leaving = staff.date_of_leaving;
    this.local_address = staff.local_address;
    this.permanent_address = staff.permanent_address;
    this.note = staff.note;
    this.image = staff.image;
    this.password = staff.password;
    this.gender = staff.gender;
    this.blood_group = staff.blood_group;
    this.account_title = staff.account_title;
    this.bank_account_no = staff.bank_account_no;
    this.bank_name = staff.bank_name;
    this.ifsc_code = staff.ifsc_code;
    this.bank_branch = staff.bank_branch;
    this.payscale = staff.payscale;
    this.basic_salary = staff.basic_salary;
    this.epf_no = staff.epf_no;
    this.contract_type = staff.contract_type;
    this.shift = staff.shift;
    this.location = staff.location;
    this.facebook = staff.facebook;
    this.twitter = staff.twitter;
    this.linkedin = staff.linkedin;
    this.instagram = staff.instagram;
    this.resume = staff.resume;
    this.joining_letter = staff.joining_letter;
    this.resignation_letter = staff.resignation_letter;
    this.other_document_name = staff.other_document_name;
    this.other_document_file = staff.other_document_file;
    this.user_id = staff.user_id;
    this.is_active = staff.is_active;
    this.verification_code = staff.verification_code;
    this.zoom_api_key = staff.zoom_api_key;
    this.zoom_api_secret = staff.zoom_api_secret;
    this.pan_number = staff.pan_number;
    this.identification_number = staff.identification_number;
    this.local_identification_number = staff.local_identification_number;
    this.created_at = staff.created_at;

}

Staff.getstaffdetails = (result)=>{
    dbconn.query('select * from staff',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('staff fetched');
            result(null,res);
        }
        })
    }

    Staff.getstaffdetailsById = (id,result)=>{
        dbconn.query('select * from staff where id=?',id,(err,res)=>{
            if(err){
                console.log('error occured while getting by id',err);
                result(null,err);
            }else{
                console.log('staff fetched by id');
                result(null,res);
            }
        })
    }

    Staff.getstaffdetailsByName = (name,result)=>{
        dbconn.query('select * from staff where name=?',name,(err,res)=>{
            if(err){
                console.log('error occured while getting by name',err);
                result(null,err);
            }else{
                console.log('staff fetched by name');
                result(null,res);
                        }
            
        })
    }

    Staff.createstaffdetails = (staffdata,result)=>{
        dbconn.query('insert into staff SET ?',staffdata,(err,res)=>{
            if(err){
                console.log(err)
                console.log('error while inserting data');
                result(null,err);
            }else{
                console.log('staff Data inserted successfully');
                result(null,res)
            }
            
        })
    }

    module.exports = Staff;