const deathrecordmodel = require('../models/deathrecord.model');
exports.getdeathrecord = (req,res)=>{
    deathrecordmodel.getdeathrecord ((err,deathrecord_list)=>{
        if(err)
        res.send(err);
     
        console.log('deathrecord_list ',deathrecord_list);
        res.send(deathrecord_list);
    })
}


exports.createdeathrecord =(req,res)=>{
    const deathrecord_data = new deathrecordmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        deathrecordmodel.createdeathrecord(deathrecord_data,(err,deathrecord_list)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' record added successfully',data:deathrecord_list.insertId});

        })
    }
}


exports.getrecordByname = (req,res) =>{
  console.log('get record by patient_id');
  deathrecordmodel.getrecordByname(req.params.patient_id,(err, record)=>{
       
      if(err)
          res.send(err);
         
          console.log('Single record',record);
          res.send(record[0]);
      })
}