const referralpersonmodel = require('../models/referralperson.model');
exports.getreferralperson = (req,res)=>{
    referralpersonmodel.getreferralperson ((err,referralperson_list)=>{
        if(err)
        res.send(err);
     
        console.log('referralperson_list ',referralperson_list);
        res.send(referralperson_list);
    })
}


exports.createreferralperson =(req,res)=>{
    const referralperson_data = new referralpersonmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        referralpersonmodel.createreferralperson(referralperson_data,(err,referralperson_list)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' record added successfully',data:referralperson_list.insertId});

        })
    }
}


exports.getreferralpersonByname = (req,res) =>{
  console.log('get record by name');
  referralpersonmodel.getreferralpersonByname(req.params.name,(err, record)=>{
       
      if(err)
          res.send(err);
         
          console.log('Single record',record);
          res.send(record[0]);
      })
}