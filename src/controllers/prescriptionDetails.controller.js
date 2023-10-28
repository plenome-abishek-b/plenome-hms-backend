const PrescriptionDetailsModel=require('../models/prescriptionDetails.model');
exports.getPrescription = (req,res)=>{
    PrescriptionDetailsModel.getPrescription ((err,details)=>{
        if(err)
        res.send(err);
     
        console.log('prescription details ',details);
        res.send(details);
    })
}


exports.getPrescriptionDetailsById = (req,res) =>{
    PrescriptionDetailsModel.getPrescriptionDetailsById(req.params.basic_id,(err, details)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single details',details);
            res.send(details[0]);
        })
}


exports.createPrescription =(req,res)=>{
    const detailsData = new PrescriptionDetailsModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PrescriptionDetailsModel.createPrescription(detailsData,(err,detail)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' prescription details added successfully',data:detail.insertId});

        })
    }
}
