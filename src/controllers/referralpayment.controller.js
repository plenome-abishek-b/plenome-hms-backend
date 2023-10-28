const referralpaymentmodel = require('../models/referralpayment.model');
exports.getreferralpayment = (req,res)=>{
    referralpaymentmodel.getreferralpayment ((err,referralpayment_list)=>{
        if(err)
        res.send(err);
     
        console.log('referralpayment_list ',referralpayment_list);
        res.send(referralpayment_list);
    })
}


exports.createreferralpayment =(req,res)=>{
    const referralpayment_data = new referralpaymentmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        referralpaymentmodel.createreferralpayment(referralpayment_data,(err,referralpayment_list)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' record added successfully',data:referralpayment_list.insertId});

        })
    }
}


exports.getreferralpaymentByname = (req,res) =>{
  console.log('get record by name');
  referralpaymentmodel.getreferralpaymentByname(req.params.patient_id,(err, record)=>{
       
      if(err)
          res.send(err);
         
          console.log('Single record',record);
          res.send(record[0]);
      })
}