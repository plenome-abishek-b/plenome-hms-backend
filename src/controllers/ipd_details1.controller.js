const ipd_details_model = require('../models/ipd_details1.model');
exports.get_ipd_details = (req,res)=>{

let updatedQuery = 'select distinct ipd_details.*,patients.patient_name,patients.mobileno,patients.guardian_name,patients.age,patients.gender,ipd_prescription_basic.*,(concat(staff.name," ",staff.surname," (",staff.employee_id, ")"))doctor from ipd_details left join patients on patients.id = ipd_details.patient_id left join ipd_prescription_basic on ipd_prescription_basic.ipd_id = ipd_details.id left join staff on staff.id = ipd_details.cons_doctor ';
let updatedValue = [];
if(req.query.id){
    console.log("first")
    updatedQuery += 'where ipd_details.id = ?'
    updatedValue.push(req.query.id)
}
if(req.query.patientId){
    updatedQuery += 'where ipd_details.patient_id = ?'
    updatedValue.push(req.query.patientId)
}

    ipd_details_model.setQuery(updatedQuery,updatedValue);

    ipd_details_model.get_ipd_details((err,ipd_details)=>{
        if(err)
        res.send(err);
     
        console.log('ipd_details ',ipd_details);
        res.send(ipd_details);
    })
}



exports.create_ipd_details = (req,res)=>{
    const ipd_details_data = new ipd_details_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        ipd_details_model.create_ipd_details(ipd_details_data,(err,ipd_detail)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' ipd_details added successfully',data:ipd_detail.insertId});

        })
    }
}
